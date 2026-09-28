const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('C:/Users/hamma/.gemini/antigravity-ide/brain/37a44ecf-0c52-425d-ba55-ceb9c2bff674/.system_generated/steps/74/content.md', 'utf8');

const outDir = path.join(__dirname, 'doc_images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imgRegex = /data:image\/([a-zA-Z]+);base64,([^"]+)/g;
let match;
let count = 0;

while ((match = imgRegex.exec(content)) !== null) {
  count++;
  const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
  const buffer = Buffer.from(match[2], 'base64');
  const filePath = path.join(outDir, `image_${count}.${ext}`);
  fs.writeFileSync(filePath, buffer);
  console.log(`Saved image_${count}.${ext} (${buffer.length} bytes)`);
}
