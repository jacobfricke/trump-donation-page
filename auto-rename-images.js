#!/usr/bin/env node
/**
 * Automatically rename cell_*.png files to trump-*.png format
 * This runs before the server starts to ensure images have correct names
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

// Mapping of old names to new names
const renameMap = {
    'cell_1_1.png': 'trump-1-neutral.png',
    'cell_1_2.png': 'trump-2-slightly-annoyed.png',
    'cell_2_1.png': 'trump-3-annoyed.png',
    'cell_2_2.png': 'trump-4-angry.png',
    'cell_3_1.png': 'trump-5-very-angry.png',
    'cell_3_2.png': 'trump-6-maximum-anger.png'
};

console.log('🔍 Checking for images that need renaming...');

let renamedCount = 0;

Object.entries(renameMap).forEach(([oldName, newName]) => {
    const oldPath = path.join(imagesDir, oldName);
    const newPath = path.join(imagesDir, newName);

    if (fs.existsSync(oldPath)) {
        try {
            fs.renameSync(oldPath, newPath);
            console.log(`✓ Renamed: ${oldName} → ${newName}`);
            renamedCount++;
        } catch (error) {
            console.error(`✗ Error renaming ${oldName}:`, error.message);
        }
    }
});

if (renamedCount > 0) {
    console.log(`\n✅ Successfully renamed ${renamedCount} image(s)`);
} else {
    console.log('ℹ️  No images need renaming (already correct or missing)');
}

// List current images
console.log('\n📁 Current images in directory:');
try {
    const files = fs.readdirSync(imagesDir)
        .filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

    if (files.length > 0) {
        files.forEach(file => console.log(`   - ${file}`));
    } else {
        console.log('   (no image files found)');
    }
} catch (error) {
    console.log('   Error reading directory:', error.message);
}

console.log('');
