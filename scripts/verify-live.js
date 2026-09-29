const https = require('https');

function check(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const canonical = data.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
        const ogUrl = data.match(/<meta[^>]+property=["']og:url["'][^>]*>/i);
        const desc = data.match(/<meta[^>]+name=["']description["'][^>]*>/i);
        const descContent = desc ? desc[0].match(/content="([^"]*)"/)?.[1] : null;
        console.log(`[${res.statusCode}] ${url}`);
        if (canonical) console.log(`  Canonical: ${canonical[0]}`);
        if (ogUrl) console.log(`  OG URL: ${ogUrl[0]}`);
        if (descContent) console.log(`  Desc (${descContent.length} chars): "${descContent}"`);
        resolve();
      });
    }).on('error', err => {
      console.log(`Error on ${url}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  const routes = [
    'https://equipment-rental-software.vercel.app/pricing',
    'https://equipment-rental-software.vercel.app/about-us',
    'https://equipment-rental-software.vercel.app/contact-us',
    'https://equipment-rental-software.vercel.app/login',
    'https://equipment-rental-software.vercel.app/signup',
    'https://equipment-rental-software.vercel.app/privacy-policy',
    'https://equipment-rental-software.vercel.app/terms-and-conditions',
    'https://equipment-rental-software.vercel.app/nonexistent-test-404',
  ];
  for (const r of routes) {
    await check(r);
  }
}

run();
