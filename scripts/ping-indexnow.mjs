/**
 * Automated IndexNow Ping Script
 * Instantly notifies Bing, Yandex, and IndexNow search engine partners whenever routes update.
 */
const KEY = "4a8c9e562140360164indexnow";
const HOST = "equipmentrentalsoftware.io";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/features`,
  `https://${HOST}/pricing`,
  `https://${HOST}/contact-us`,
  `https://${HOST}/about-us`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/terms-and-conditions`,
];

async function submitIndexNow() {
  console.log("=== PINGING INDEXNOW API FOR ALL PUBLIC ROUTES ===");
  console.log(`Host: ${HOST}`);
  console.log(`Key Location: ${KEY_LOCATION}`);
  console.log(`URLs to submit: ${URL_LIST.length}`);

  try {
    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: URL_LIST,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      console.log(`[SUCCESS] IndexNow accepted payload with HTTP ${res.status} ${res.statusText}`);
    } else {
      console.warn(`[NOTICE] IndexNow responded with HTTP ${res.status}: ${res.statusText}`);
    }
  } catch (error) {
    console.error("[ERROR] Failed to send IndexNow request:", error.message);
  }
}

submitIndexNow();
