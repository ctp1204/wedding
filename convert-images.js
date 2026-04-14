const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

async function convertToWebP(inputPath, quality = 80) {
    const ext = path.extname(inputPath);
    if (ext.toLowerCase() !== '.jpg' && ext.toLowerCase() !== '.jpeg') return;

    const outputPath = inputPath.replace(/\.(jpg|jpeg)$/i, '.webp');
    const inputStat = fs.statSync(inputPath);

    await sharp(inputPath)
        .webp({ quality })
        .toFile(outputPath);

    const outputStat = fs.statSync(outputPath);
    const saved = ((inputStat.size - outputStat.size) / inputStat.size * 100).toFixed(1);
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}  ${(inputStat.size / 1024 / 1024).toFixed(1)}MB → ${(outputStat.size / 1024 / 1024).toFixed(1)}MB  (-${saved}%)`);
}

async function main() {
    // Convert images in root images/ dir
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
        const filePath = path.join(imagesDir, file);
        if (fs.statSync(filePath).isFile()) {
            await convertToWebP(filePath);
        }
    }

    // Convert images in subdirectories (e.g. qr-code/)
    const subdirs = files.filter(f => fs.statSync(path.join(imagesDir, f)).isDirectory());
    for (const subdir of subdirs) {
        const subdirPath = path.join(imagesDir, subdir);
        const subFiles = fs.readdirSync(subdirPath);
        for (const file of subFiles) {
            await convertToWebP(path.join(subdirPath, file));
        }
    }

    console.log('\nDone! All images converted.');
}

main().catch(console.error);
