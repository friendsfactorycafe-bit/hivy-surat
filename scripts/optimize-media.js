#!/usr/bin/env node

/**
 * HIVY Media Optimization Script
 * 
 * This script helps:
 * 1. Find duplicate images by comparing file hashes
 * 2. Compress images using sharp
 * 3. Compress videos using ffmpeg
 * 
 * Usage:
 *   node scripts/optimize-media.js --find-duplicates
 *   node scripts/optimize-media.js --compress-images
 *   node scripts/optimize-media.js --compress-videos
 *   node scripts/optimize-media.js --all
 * 
 * Requirements:
 *   npm install sharp
 *   ffmpeg must be installed on system (brew install ffmpeg)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const PUBLIC_DIR = path.join(__dirname, '../public');
const PACKAGES_DIR = path.join(PUBLIC_DIR, 'packages');
const VIDEOS_DIR = path.join(PUBLIC_DIR, 'videos');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Get all image files recursively
function getImageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getImageFiles(fullPath, files);
    } else if (/\.(png|jpg|jpeg|webp|avif)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  return files;
}

// Get all video files
function getVideoFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => /\.(mp4|mov|webm|avi)$/i.test(f))
    .map(f => path.join(dir, f));
}

// Calculate file hash for duplicate detection
function getFileHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex');
}

// Find duplicate images
function findDuplicates() {
  console.log('\n🔍 Finding duplicate images...\n');
  
  const imageFiles = [
    ...getImageFiles(PACKAGES_DIR),
    ...getImageFiles(IMAGES_DIR)
  ];
  
  const hashMap = new Map();
  const duplicates = [];
  
  for (const file of imageFiles) {
    const hash = getFileHash(file);
    if (hashMap.has(hash)) {
      duplicates.push({
        original: hashMap.get(hash),
        duplicate: file
      });
    } else {
      hashMap.set(hash, file);
    }
  }
  
  if (duplicates.length === 0) {
    console.log('✅ No duplicate images found!');
  } else {
    console.log(`⚠️  Found ${duplicates.length} duplicate images:\n`);
    duplicates.forEach((d, i) => {
      console.log(`${i + 1}. Duplicate:`);
      console.log(`   Original:  ${path.relative(PUBLIC_DIR, d.original)}`);
      console.log(`   Duplicate: ${path.relative(PUBLIC_DIR, d.duplicate)}`);
      console.log('');
    });
    
    // Save duplicates list
    const outputFile = path.join(__dirname, 'duplicates-list.json');
    fs.writeFileSync(outputFile, JSON.stringify(duplicates, null, 2));
    console.log(`📄 Duplicates list saved to: ${outputFile}`);
    console.log('\nTo remove duplicates, you can run:');
    console.log('  node scripts/optimize-media.js --remove-duplicates');
  }
  
  return duplicates;
}

// Get image sizes
function getImageSizes() {
  console.log('\n📊 Analyzing image sizes...\n');
  
  const imageFiles = [
    ...getImageFiles(PACKAGES_DIR),
    ...getImageFiles(IMAGES_DIR)
  ];
  
  let totalSize = 0;
  const largeImages = [];
  
  for (const file of imageFiles) {
    const stats = fs.statSync(file);
    const sizeMB = stats.size / (1024 * 1024);
    totalSize += stats.size;
    
    if (sizeMB > 0.5) { // Images larger than 500KB
      largeImages.push({
        path: path.relative(PUBLIC_DIR, file),
        size: sizeMB.toFixed(2) + ' MB'
      });
    }
  }
  
  console.log(`Total images: ${imageFiles.length}`);
  console.log(`Total size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  
  if (largeImages.length > 0) {
    console.log(`\n⚠️  ${largeImages.length} images larger than 500KB:`);
    largeImages.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    largeImages.slice(0, 20).forEach(img => {
      console.log(`   ${img.size} - ${img.path}`);
    });
  }
}

// Get video sizes
function getVideoSizes() {
  console.log('\n🎬 Analyzing video sizes...\n');
  
  const videoFiles = getVideoFiles(VIDEOS_DIR);
  let totalSize = 0;
  
  const videoInfo = videoFiles.map(file => {
    const stats = fs.statSync(file);
    totalSize += stats.size;
    return {
      path: path.relative(PUBLIC_DIR, file),
      size: (stats.size / (1024 * 1024)).toFixed(2) + ' MB'
    };
  });
  
  console.log(`Total videos: ${videoFiles.length}`);
  console.log(`Total size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  
  videoInfo.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
  console.log('\nVideos by size:');
  videoInfo.forEach(v => {
    console.log(`   ${v.size} - ${v.path}`);
  });
}

// Compress images using sharp
async function compressImages() {
  console.log('\n🖼️  Compressing images...\n');
  
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('❌ sharp not installed. Run: npm install sharp');
    return;
  }
  
  const imageFiles = [
    ...getImageFiles(PACKAGES_DIR),
    ...getImageFiles(IMAGES_DIR)
  ];
  
  let compressed = 0;
  let savedBytes = 0;
  
  for (const file of imageFiles) {
    try {
      const originalSize = fs.statSync(file).size;
      const ext = path.extname(file).toLowerCase();
      
      // Skip already optimized files
      if (originalSize < 100 * 1024) continue; // Skip files under 100KB
      
      const outputPath = file.replace(ext, '.optimized' + ext);
      
      let pipeline = sharp(file);
      
      // Resize if too large (max 1200px width for web)
      const metadata = await pipeline.metadata();
      if (metadata.width > 1200) {
        pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
      }
      
      // Compress based on format
      if (ext === '.png') {
        await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(outputPath);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await pipeline.jpeg({ quality: 80 }).toFile(outputPath);
      } else if (ext === '.webp') {
        await pipeline.webp({ quality: 80 }).toFile(outputPath);
      }
      
      const newSize = fs.statSync(outputPath).size;
      const savings = originalSize - newSize;
      
      if (savings > 0) {
        // Replace original with optimized
        fs.renameSync(outputPath, file);
        savedBytes += savings;
        compressed++;
        console.log(`✅ ${path.basename(file)}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (saved ${(savings/1024).toFixed(0)}KB)`);
      } else {
        // Keep original if compression didn't help
        fs.unlinkSync(outputPath);
      }
    } catch (err) {
      console.error(`❌ Error compressing ${file}: ${err.message}`);
    }
  }
  
  console.log(`\n✅ Compressed ${compressed} images, saved ${(savedBytes / (1024 * 1024)).toFixed(2)} MB`);
}

// Compress videos using ffmpeg
function compressVideos() {
  console.log('\n🎬 Compressing videos...\n');
  
  // Check if ffmpeg is available
  try {
    execSync('which ffmpeg', { stdio: 'ignore' });
  } catch (e) {
    console.error('❌ ffmpeg not installed. Run: brew install ffmpeg');
    return;
  }
  
  const videoFiles = getVideoFiles(VIDEOS_DIR);
  let compressed = 0;
  let savedBytes = 0;
  
  for (const file of videoFiles) {
    try {
      const originalSize = fs.statSync(file).size;
      const ext = path.extname(file).toLowerCase();
      const outputPath = file.replace(ext, '.compressed' + ext);
      
      // Skip small videos
      if (originalSize < 5 * 1024 * 1024) continue; // Skip under 5MB
      
      console.log(`Processing: ${path.basename(file)}...`);
      
      // Compress video: lower bitrate, scale down if needed
      const cmd = `ffmpeg -i "${file}" -vcodec libx264 -crf 28 -preset medium -vf "scale='min(720,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -acodec aac -b:a 128k -y "${outputPath}" 2>/dev/null`;
      
      execSync(cmd, { stdio: 'inherit' });
      
      const newSize = fs.statSync(outputPath).size;
      const savings = originalSize - newSize;
      
      if (savings > 0) {
        fs.renameSync(outputPath, file);
        savedBytes += savings;
        compressed++;
        console.log(`✅ Saved ${(savings / (1024 * 1024)).toFixed(2)} MB`);
      } else {
        fs.unlinkSync(outputPath);
        console.log(`⏭️  Skipped (no improvement)`);
      }
    } catch (err) {
      console.error(`❌ Error compressing ${file}: ${err.message}`);
    }
  }
  
  console.log(`\n✅ Compressed ${compressed} videos, saved ${(savedBytes / (1024 * 1024)).toFixed(2)} MB`);
}

// Main
const args = process.argv.slice(2);

console.log('🚀 HIVY Media Optimization Script\n');

if (args.includes('--find-duplicates')) {
  findDuplicates();
} else if (args.includes('--compress-images')) {
  compressImages();
} else if (args.includes('--compress-videos')) {
  compressVideos();
} else if (args.includes('--analyze')) {
  getImageSizes();
  getVideoSizes();
} else if (args.includes('--all')) {
  findDuplicates();
  getImageSizes();
  getVideoSizes();
} else {
  console.log('Usage:');
  console.log('  node scripts/optimize-media.js --find-duplicates    Find duplicate images');
  console.log('  node scripts/optimize-media.js --analyze            Analyze image/video sizes');
  console.log('  node scripts/optimize-media.js --compress-images    Compress images (requires sharp)');
  console.log('  node scripts/optimize-media.js --compress-videos    Compress videos (requires ffmpeg)');
  console.log('  node scripts/optimize-media.js --all               Find duplicates and analyze sizes');
}
