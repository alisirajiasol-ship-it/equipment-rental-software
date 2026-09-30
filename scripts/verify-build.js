const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING BUILD OUTPUTS ===\n');

// 1. Check sitemap
function findFiles(dir, nameFilter) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findFiles(fullPath, nameFilter));
    } else if (nameFilter(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

const sitemapFiles = findFiles('.next', f => f.includes('sitemap'));
console.log('Found sitemap files:', sitemapFiles);
sitemapFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('<url>') || content.includes('http')) {
    console.log('\n--- Content of ' + f + ' ---');
    console.log(content.substring(0, 1000));
    const urls = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    console.log('Total URLs in sitemap:', urls.length);
    console.log('URLs:', urls);
    const hasLogin = urls.some(u => u.includes('/login'));
    const hasSignup = urls.some(u => u.includes('/signup'));
    console.log('Has /login in sitemap:', hasLogin ? 'FAIL' : 'PASS (None)');
    console.log('Has /signup in sitemap:', hasSignup ? 'FAIL' : 'PASS (None)');
  }
});

// 2. Check robots
const robotsFiles = findFiles('.next', f => f.includes('robots'));
console.log('\nFound robots files:', robotsFiles);
robotsFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('User-Agent') || content.includes('user-agent') || content.includes('Sitemap')) {
    console.log('\n--- Content of ' + f + ' ---');
    console.log(content);
  }
});

// 3. Check Homepage HTML
const indexHtmlPaths = findFiles('.next', f => f === 'index.html');
console.log('\nFound index.html files:', indexHtmlPaths);
indexHtmlPaths.forEach(indexPath => {
  console.log('\n--- Checking ' + indexPath + ' ---');
  const html = fs.readFileSync(indexPath, 'utf8');

  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  console.log('Title: "' + (titleMatch ? titleMatch[1] : 'NOT FOUND') + '"');
  console.log('Title length:', titleMatch ? titleMatch[1].length : 0);

  // Description
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  console.log('Description: "' + (descMatch ? descMatch[1] : 'NOT FOUND') + '"');
  console.log('Description length:', descMatch ? descMatch[1].length : 0);

  // Canonical
  const canonMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  console.log('Canonical: "' + (canonMatch ? canonMatch[1] : 'NOT FOUND') + '"');

  // Headings
  const headingMatches = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)];
  console.log('Total headings in HTML:', headingMatches.length);
  const counts = { H1: 0, H2: 0, H3: 0, OTHER: 0 };
  const headingList = [];
  headingMatches.forEach(m => {
    const lvl = m[1].toUpperCase();
    const text = m[2].replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    if (counts[lvl] !== undefined) counts[lvl]++;
    else counts.OTHER++;
    headingList.push({ lvl, text });
  });
  console.log('Counts:', counts);
  console.log('\nFull heading tree:');
  headingList.forEach((h, i) => console.log((i + 1) + '. ' + h.lvl + ': ' + h.text));

  // JSON-LD
  const ldMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  console.log('\nLD+JSON scripts found:', ldMatches.length);
  ldMatches.forEach((m, i) => {
    try {
      const parsed = JSON.parse(m[1]);
      console.log('Script #' + (i + 1) + ':');
      if (parsed['@graph']) {
        console.log('  @graph with ' + parsed['@graph'].length + ' nodes:');
        parsed['@graph'].forEach(node => console.log('    - ' + node['@type'] + ' (@id: ' + node['@id'] + ')'));
        
        // Check SoftwareApplication offers
        const app = parsed['@graph'].find(n => n['@type'] === 'SoftwareApplication');
        if (app && app.offers) {
          console.log('  SoftwareApplication offers:', app.offers.map(o => o.name + ' ($' + o.price + ')'));
        }

        // Check FAQPage
        const faq = parsed['@graph'].find(n => n['@type'] === 'FAQPage');
        if (faq && faq.mainEntity) {
          console.log('  FAQPage question count:', faq.mainEntity.length);
        }
      } else {
        console.log('  Type:', parsed['@type']);
      }
    } catch (e) {
      console.log('  JSON parse error in script #' + (i + 1) + ':', e.message);
    }
  });

  // Banned phrases
  const banned = ['no credit card required', 'risk-free', 'zero risk', 'cancel anytime', '100% risk-free'];
  console.log('\nBanned phrases check:');
  banned.forEach(b => {
    const found = html.toLowerCase().includes(b);
    console.log('  "' + b + '": ' + (found ? 'FAIL (found)' : 'PASS (not found)'));
  });
});

// 4. Check /login and /signup HTML
['login', 'signup'].forEach(route => {
  const routeFiles = findFiles('.next', f => f === route + '.html');
  routeFiles.forEach(f => {
    console.log('\n--- Checking ' + f + ' ---');
    const html = fs.readFileSync(f, 'utf8');
    const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"/);
    console.log('Meta robots in ' + route + ':', robotsMatch ? robotsMatch[1] : 'NOT FOUND');
  });
});
