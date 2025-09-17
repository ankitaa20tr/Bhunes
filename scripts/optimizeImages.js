import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files from assets directory
const imageFiles = fs.readdirSync(assetsDir)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`Found ${imageFiles.length} images to optimize`);

// Process each image
Promise.all(imageFiles.map(async (file) => {
  const inputPath = path.join(assetsDir, file);
  const fileNameWithoutExt = path.parse(file).name;
  const outputPath = path.join(outputDir, `${fileNameWithoutExt}.webp`);
  
  try {
    // Convert to WebP with 80% quality (good balance between quality and file size)
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${file} → ${fileNameWithoutExt}.webp (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error);
  }
}))
.then(() => {
  console.log('\n✨ Image optimization complete!');
})
.catch(err => {
  console.error('Error during optimization:', err);
});