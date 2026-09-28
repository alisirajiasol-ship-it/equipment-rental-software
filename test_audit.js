const routes = [
  "/",
  "/pricing",
  "/features",
  "/contact-us",
  "/about-us",
  "/privacy-policy",
  "/terms-and-conditions",
];

const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

async function runAudit() {
  console.log("=== STARTING MASTER SEO & TECHNICAL AUDIT ===");
  let allPassed = true;

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[FAIL] ${route} returned HTTP ${res.status}`);
      allPassed = false;
      continue;
    }
    const html = await res.text();

    // 1. Single H1 Check
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    if (h1Matches.length !== 1) {
      console.error(`[FAIL] ${route} has ${h1Matches.length} <h1> tags (Expected exactly 1)`);
      allPassed = false;
    } else {
      console.log(`[PASS] ${route}: Single <h1> verified.`);
    }

    // 2. Title Check
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (!titleMatch) {
      console.error(`[FAIL] ${route} missing <title>`);
      allPassed = false;
    } else {
      console.log(`[PASS] ${route}: Title -> "${titleMatch[1]}"`);
    }

    // 3. Canonical Check
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
    if (!canonicalMatch) {
      console.error(`[FAIL] ${route} missing canonical link`);
      allPassed = false;
    } else {
      console.log(`[PASS] ${route}: Canonical link verified.`);
    }

    // 4. JSON-LD Check
    const jsonLdMatches = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    if (jsonLdMatches.length === 0) {
      console.error(`[FAIL] ${route} missing JSON-LD structured data`);
      allPassed = false;
    } else {
      console.log(`[PASS] ${route}: Found ${jsonLdMatches.length} JSON-LD schema script(s).`);
      for (const scriptTag of jsonLdMatches) {
        const jsonContent = scriptTag.replace(/<script[^>]*>/i, "").replace(/<\/script>/i, "").trim();
        try {
          JSON.parse(jsonContent);
        } catch (e) {
          console.error(`[FAIL] ${route}: Invalid JSON in JSON-LD script ->`, e.message);
          allPassed = false;
        }
      }
    }

    // 5. Zero Emojis Check
    if (emojiRegex.test(html)) {
      console.error(`[FAIL] ${route} contains emoji characters! Zero emoji rule violated.`);
      allPassed = false;
    } else {
      console.log(`[PASS] ${route}: Zero emojis rule confirmed.`);
    }
    console.log("---------------------------------------------");
  }

  if (allPassed) {
    console.log(">>> ALL 7 ROUTES PASSED MASTER TECHNICAL & SEO AUDIT 100%! <<<");
  } else {
    console.error(">>> AUDIT ENCOUNTERED ISSUES. SEE ABOVE. <<<");
    process.exit(1);
  }
}

runAudit();
