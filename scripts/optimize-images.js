const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const imagesToOptimize = [
  'showcase-asset-tracking.jpg',
  'showcase-dispatch-scheduling.jpg',
  'showcase-maintenance-inspections.jpg',
  'hero-fleet.jpg',
  'asset-excavator.jpg',
  'contractor-boomlift.jpg',
  'fleet-maintenance.jpg'
];

async function run() {
  for (const filename of imagesToOptimize) {
    const filePath = path.join(imagesDir, filename);
    if (!fs.existsSync(filePath)) continue;

    const originalBuf = fs.readFileSync(filePath);
    console.log(`Original ${filename}: ${(originalBuf.length / 1024).toFixed(1)} KB`);

    const optimizedBuf = await sharp(originalBuf)
      .resize({ width: 1000, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();

    console.log(`Optimized ${filename}: ${(optimizedBuf.length / 1024).toFixed(1)} KB`);
    fs.writeFileSync(filePath, optimizedBuf);
  }
  console.log("All images successfully compressed and saved!");
}

run().catch(console.error);
