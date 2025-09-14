// scripts/build-media-manifests.mjs - Universal Media Manifest Builder
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;
const VIDEO_RE = /\.(mp4|webm|ogg|mov)$/i;

// Configuration for different media directories
const MEDIA_CONFIGS = [
  {
    name: "Card Images",
    inputDir: path.join(ROOT, "Images", "cardImages"),
    outputFile: path.join(ROOT, "Images", "cardImages", "images.json"),
    type: "flat",
    manifestKey: "fabrics"
  },
  {
    name: "Category Images",
    inputDir: path.join(ROOT, "Images", "fabricCategoryTile"),
    outputFile: path.join(ROOT, "Images", "fabricCategoryTile", "category-images.json"),
    type: "folders",
    manifestKey: "categoryFolders"
  },
  {
    name: "Video Cards",
    inputDir: path.join(ROOT, "Videos", "videoCard"),
    outputFile: path.join(ROOT, "Videos", "videoCard", "manifest.json"),
    type: "flat",
    manifestKey: null // plain array
  },
  {
    name: "Dropping Images",
    inputDir: path.join(ROOT, "Images", "droppingImages"),
    outputFile: path.join(ROOT, "Images", "droppingImages", "manifest.json"),
    type: "flat",
    manifestKey: null // plain array
  }
];

// Scan flat directory for media files (images and videos)
async function scanFlatDirectory(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    return files
      .filter((f) => IMAGE_RE.test(f) || VIDEO_RE.test(f))
      .sort((a, b) => a.localeCompare(b));
  } catch (err) {
    console.warn(`⚠️ Could not read directory ${dirPath}:`, err.message);
    return [];
  }
}

// Scan directory for subfolders with images
async function scanFolderStructure(dirPath) {
  try {
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    const result = {};

    for (const item of items) {
      if (item.isDirectory()) {
        const categoryName = item.name;
        const categoryPath = path.join(dirPath, categoryName);

        try {
          const files = await fs.readdir(categoryPath);
          const images = files
            .filter((f) => IMAGE_RE.test(f))
            .sort((a, b) => a.localeCompare(b));

          if (images.length > 0) {
            result[categoryName] = images;
          }
        } catch (err) {
          console.warn(`⚠️ Could not read category folder ${categoryName}:`, err.message);
        }
      }
    }

    return result;
  } catch (err) {
    console.error(`❌ Error scanning folder structure in ${dirPath}:`, err);
    return {};
  }
}

// Process a single configuration
async function processImageConfig(config) {
  console.log(`\n🔄 Processing ${config.name}...`);

  // Ensure directory exists
  await fs.mkdir(config.inputDir, { recursive: true });
  await fs.mkdir(path.dirname(config.outputFile), { recursive: true });

  let manifest = {};
  let totalItems = 0;

  if (config.type === "flat") {
    // Handle flat file structure
    const mediaFiles = await scanFlatDirectory(config.inputDir);

    if (config.manifestKey) {
      manifest[config.manifestKey] = mediaFiles;
    } else {
      manifest = mediaFiles; // plain array
    }

    totalItems = mediaFiles.length;
    console.log(`  📁 Found ${totalItems} media files`);

  } else if (config.type === "folders") {
    // Handle folder structure
    const categoryFolders = await scanFolderStructure(config.inputDir);
    const totalCategories = Object.keys(categoryFolders).length;
    const totalImages = Object.values(categoryFolders).reduce((sum, images) => sum + images.length, 0);

    manifest = {
      [config.manifestKey]: categoryFolders,
      totalCategories: totalCategories,
      totalImages: totalImages
    };
    totalItems = totalImages;

    console.log(`  📁 Found ${totalImages} images in ${totalCategories} category folders:`);
    Object.keys(categoryFolders).forEach(category => {
      console.log(`    📂 ${category}: ${categoryFolders[category].length} images`);
    });
  }

  // Write manifest file
  await fs.writeFile(config.outputFile, JSON.stringify(manifest, null, 2));
  console.log(`✅ Wrote ${config.name.toLowerCase()} manifest: ${totalItems} items → ${config.outputFile}`);

  return { success: true, totalItems };
}

// Main function
async function main() {
  console.log("🚀 Building Media Manifests...\n");

  let totalProcessed = 0;
  let successCount = 0;

  for (const config of MEDIA_CONFIGS) {
    try {
      const result = await processImageConfig(config);
      if (result.success) {
        successCount++;
        totalProcessed += result.totalItems;
      }
    } catch (err) {
      console.error(`❌ Failed to process ${config.name}:`, err);
    }
  }

  console.log(`\n🎉 Completed! Successfully processed ${successCount}/${MEDIA_CONFIGS.length} configurations`);
  console.log(`📊 Total items processed: ${totalProcessed}`);
}

main().catch(err => {
  console.error("💥 Fatal error:", err);
  process.exit(1);
});