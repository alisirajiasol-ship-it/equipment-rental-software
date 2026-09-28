const fs = require('fs');
const content = fs.readFileSync('C:/Users/hamma/.gemini/antigravity-ide/brain/37a44ecf-0c52-425d-ba55-ceb9c2bff674/.system_generated/steps/74/content.md', 'utf8');

// Replace base64 data to inspect structure
let imgIndex = 0;
const textWithMarkers = content.replace(/data:image\/[^;]+;base64,[^"]+/g, () => {
  imgIndex++;
  return `__IMAGE_${imgIndex}__`;
});

const elements = textWithMarkers.match(/<(p|h1|h2|h3|h4|div|li)[^>]*>[\s\S]*?<\/\1>/gi) || [];
for (const el of elements) {
  const images = [];
  const text = el.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const imgMatches = el.match(/__IMAGE_\d+__/g);
  if (text || imgMatches) {
    console.log('---');
    if (imgMatches) console.log('Images:', imgMatches.join(', '));
    if (text) console.log('Text:', text);
  }
}
