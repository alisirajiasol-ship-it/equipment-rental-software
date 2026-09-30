const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function runLiveChecks() {
  console.log('=== RUNNING LIVE VERIFICATION ON https://equipment-rental-software.vercel.app/ ===\n');

  // 1. Fetch homepage
  const home = await fetchUrl('https://equipment-rental-software.vercel.app/');
  console.log('Homepage status:', home.status);

  // Title
  const titleMatch = home.body.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : '';
  console.log('\n1. Title Check:');
  console.log('   Expected: "Equipment Rental Software: Inventory, Booking & Maintenance" (59 chars)');
  console.log('   Received: "' + title + '" (' + title.length + ' chars)');
  console.log('   Status:', title === 'Equipment Rental Software: Inventory, Booking & Maintenance' ? 'PASS' : 'FAIL');

  // Meta Description
  const descMatch = home.body.match(/<meta name="description" content="([^"]*)"/);
  const desc = descMatch ? descMatch[1] : '';
  console.log('\n2. Meta Description Check:');
  console.log('   Expected: "Equipment rental software to manage inventory, prevent double bookings, take payments, and track maintenance. Plans from $39/mo. Start your free trial." (151 chars)');
  console.log('   Received: "' + desc + '" (' + desc.length + ' chars)');
  console.log('   Status:', desc.startsWith('Equipment rental software to manage inventory') && desc.length === 151 ? 'PASS' : 'FAIL');

  // Canonical
  const canonMatch = home.body.match(/<link rel="canonical" href="([^"]*)"/);
  console.log('\n3. Canonical Check:');
  console.log('   Received:', canonMatch ? canonMatch[1] : 'NONE');

  // Headings
  console.log('\n4. Heading Tree Check:');
  const headingMatches = [...home.body.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)];
  const counts = { H1: 0, H2: 0, H3: 0, OTHER: 0 };
  const headings = [];
  headingMatches.forEach(m => {
    const lvl = m[1].toUpperCase();
    const text = m[2].replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    if (counts[lvl] !== undefined) counts[lvl]++;
    else counts.OTHER++;
    headings.push({ lvl, text });
  });
  console.log('   Count:', counts);
  console.log('   Total:', headings.length, '(Expected: 39 -> 1 H1, 12 H2, 26 H3)');
  console.log('   Status:', (counts.H1 === 1 && counts.H2 === 12 && counts.H3 === 26) ? 'PASS' : 'FAIL');

  // Check Schema
  console.log('\n5. Structured Data (JSON-LD) Check:');
  const ldMatches = [...home.body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  console.log('   Found scripts:', ldMatches.length);
  ldMatches.forEach((m, idx) => {
    try {
      const json = JSON.parse(m[1]);
      if (json['@graph']) {
        console.log('   @graph nodes (' + json['@graph'].length + '):');
        json['@graph'].forEach(n => console.log('     - ' + n['@type'] + ' (@id: ' + n['@id'] + ')'));
        const app = json['@graph'].find(n => n['@type'] === 'SoftwareApplication');
        if (app && app.offers) {
          console.log('     Offers:', app.offers.map(o => o.name + ' ($' + o.price + ')').join(', '));
        }
        const faq = json['@graph'].find(n => n['@type'] === 'FAQPage');
        if (faq && faq.mainEntity) {
          console.log('     FAQ items in schema:', faq.mainEntity.length);
        }
      } else {
        console.log('   Type:', json['@type']);
      }
    } catch (e) {
      console.log('   JSON Parse Error:', e.message);
    }
  });

  // Check Banned Words
  console.log('\n6. Banned Words Check:');
  const banned = ['no credit card required', 'risk-free', 'zero risk', 'cancel anytime', '100% risk-free'];
  banned.forEach(b => {
    const found = home.body.toLowerCase().includes(b);
    console.log('   "' + b + '":', found ? 'FAIL (found)' : 'PASS (clean)');
  });

  // Check Sitemap
  console.log('\n7. Sitemap Check:');
  const sitemap = await fetchUrl('https://equipment-rental-software.vercel.app/sitemap.xml');
  const sitemapUrls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log('   URLs in sitemap (' + sitemapUrls.length + '):', sitemapUrls);
  console.log('   Has /login:', sitemapUrls.some(u => u.includes('/login')) ? 'FAIL' : 'PASS (None)');
  console.log('   Has /signup:', sitemapUrls.some(u => u.includes('/signup')) ? 'FAIL' : 'PASS (None)');

  // Check Robots.txt
  console.log('\n8. Robots.txt Check:');
  const robots = await fetchUrl('https://equipment-rental-software.vercel.app/robots.txt');
  console.log(robots.body.trim());

  // Check /login and /signup noindex
  console.log('\n9. Utility Pages noindex Check:');
  const login = await fetchUrl('https://equipment-rental-software.vercel.app/login');
  const signup = await fetchUrl('https://equipment-rental-software.vercel.app/signup');
  const loginRobots = login.body.match(/<meta name="robots" content="([^"]*)"/);
  const signupRobots = signup.body.match(/<meta name="robots" content="([^"]*)"/);
  console.log('   /login meta robots:', loginRobots ? loginRobots[1] : 'NONE');
  console.log('   /login X-Robots-Tag header:', login.headers['x-robots-tag'] || 'NONE');
  console.log('   /signup meta robots:', signupRobots ? signupRobots[1] : 'NONE');
  console.log('   /signup X-Robots-Tag header:', signup.headers['x-robots-tag'] || 'NONE');

  console.log('\n=== ALL LIVE CHECKS COMPLETE ===');
}

runLiveChecks();
