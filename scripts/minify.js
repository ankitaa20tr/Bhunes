import { minify } from 'terser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import CleanCSS from 'clean-css';

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distDir = path.join(__dirname, '../dist');

// Function to recursively find files with specific extensions
async function findFiles(dir, extensions) {
  const files = [];
  
  async function scan(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  await scan(dir);
  return files;
}

// Minify JavaScript files
async function minifyJS() {
  console.log('🔍 Finding JavaScript files...');
  const jsFiles = await findFiles(distDir, ['.js']);
  console.log(`Found ${jsFiles.length} JavaScript files`);
  
  let totalSaved = 0;
  
  for (const file of jsFiles) {
    try {
      const code = fs.readFileSync(file, 'utf8');
      const originalSize = Buffer.byteLength(code, 'utf8');
      
      const result = await minify(code, {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        mangle: true
      });
      
      fs.writeFileSync(file, result.code);
      
      const newSize = Buffer.byteLength(result.code, 'utf8');
      const saved = originalSize - newSize;
      totalSaved += saved;
      
      const savingsPercent = ((saved / originalSize) * 100).toFixed(2);
      console.log(`✅ Minified ${path.relative(distDir, file)} - Saved ${savingsPercent}%`);
    } catch (error) {
      console.error(`❌ Error minifying ${file}:`, error);
    }
  }
  
  console.log(`Total JS savings: ${(totalSaved / 1024).toFixed(2)} KB`);
}

// Minify CSS files
async function minifyCSS() {
  console.log('🔍 Finding CSS files...');
  const cssFiles = await findFiles(distDir, ['.css']);
  console.log(`Found ${cssFiles.length} CSS files`);
  
  const cleanCSS = new CleanCSS({
    level: 2,
    compatibility: '*'
  });
  
  let totalSaved = 0;
  
  for (const file of cssFiles) {
    try {
      const css = fs.readFileSync(file, 'utf8');
      const originalSize = Buffer.byteLength(css, 'utf8');
      
      const minified = cleanCSS.minify(css);
      fs.writeFileSync(file, minified.styles);
      
      const newSize = Buffer.byteLength(minified.styles, 'utf8');
      const saved = originalSize - newSize;
      totalSaved += saved;
      
      const savingsPercent = ((saved / originalSize) * 100).toFixed(2);
      console.log(`✅ Minified ${path.relative(distDir, file)} - Saved ${savingsPercent}%`);
    } catch (error) {
      console.error(`❌ Error minifying ${file}:`, error);
    }
  }
  
  console.log(`Total CSS savings: ${(totalSaved / 1024).toFixed(2)} KB`);
}

// Main function
async function main() {
  console.log('🚀 Starting minification process...');
  
  if (!fs.existsSync(distDir)) {
    console.error(`❌ Dist directory not found at ${distDir}`);
    console.log('Please run the build process first with: npm run build');
    process.exit(1);
  }
  
  await minifyJS();
  await minifyCSS();
  
  console.log('✨ Minification complete!');
}

main().catch(err => {
  console.error('Error during minification:', err);
  process.exit(1);
});