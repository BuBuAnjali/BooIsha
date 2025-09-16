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
    name: "Lace Images",
    inputDir: path.join(ROOT, "Images", "Laces"),
    outputFile: path.join(ROOT, "Images", "Laces", "lace-images.json"),
    type: "folders",
    manifestKey: "laceColors"
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
  },
  {
    name: "Index Card Backgrounds",
    inputDir: path.join(ROOT, "Images", "cardImages"),
    outputFile: path.join(ROOT, "Images", "cardImages", "card-backgrounds.json"),
    type: "index-cards",
    manifestKey: "cardBackgrounds"
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

// Scan and organize images for index page card backgrounds
async function scanIndexCardImages(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const allImages = files.filter((f) => IMAGE_RE.test(f)).sort((a, b) => a.localeCompare(b));

    // Create curated collections for different card types
    const fabricImages = allImages.filter(img =>
      img.toLowerCase().includes('silk') ||
      img.toLowerCase().includes('cotton') ||
      img.toLowerCase().includes('fabric') ||
      img.toLowerCase().includes('denim') ||
      img.toLowerCase().includes('poly') ||
      img.toLowerCase().includes('dupion') ||
      img.toLowerCase().includes('crepe')
    );

    const laceImages = allImages.filter(img =>
      img.toLowerCase().includes('lace') ||
      img.toLowerCase().includes('pattern') ||
      img.toLowerCase().includes('embroid')
    );

    // Fallback for fashion/general if not enough specific images
    const generalImages = allImages.filter(img =>
      !fabricImages.includes(img) && !laceImages.includes(img)
    );

    return {
      fabrics: fabricImages.length > 0 ? fabricImages : allImages.slice(0, Math.ceil(allImages.length / 3)),
      lace: laceImages.length > 0 ? laceImages : allImages.slice(Math.ceil(allImages.length / 3), Math.ceil(2 * allImages.length / 3)),
      fashion: generalImages.length > 0 ? generalImages : allImages.slice(Math.ceil(2 * allImages.length / 3)),
      all: allImages
    };
  } catch (err) {
    console.warn(`⚠️ Could not read directory ${dirPath}:`, err.message);
    return { fabrics: [], lace: [], fashion: [], all: [] };
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

  } else if (config.type === "index-cards") {
    // Handle index page card background organization
    const cardCollections = await scanIndexCardImages(config.inputDir);

    // Also collect lace images from Laces directory for better lace card backgrounds
    const laceDir = path.join(ROOT, "Images", "Laces");
    let laceBackgrounds = [];

    try {
      const laceFolders = await scanFolderStructure(laceDir);
      // Get a diverse selection of lace images from different color folders
      Object.keys(laceFolders).forEach(color => {
        const colorImages = laceFolders[color];
        // Take up to 2 images from each color folder
        const selectedImages = colorImages.slice(0, 2).map(img => `Laces/${color}/${img}`);
        laceBackgrounds.push(...selectedImages);
      });
      console.log(`  🕸️ Added ${laceBackgrounds.length} lace images from Laces directory`);
    } catch (err) {
      console.warn(`⚠️ Could not load lace images from ${laceDir}:`, err.message);
    }

    manifest = {
      [config.manifestKey]: {
        fabricCard: cardCollections.fabrics,
        laceCard: laceBackgrounds.length > 0 ? laceBackgrounds : cardCollections.lace,
        fashionCard: cardCollections.fashion
      },
      totalImages: cardCollections.all.length + laceBackgrounds.length,
      collections: {
        fabrics: cardCollections.fabrics.length,
        lace: laceBackgrounds.length > 0 ? laceBackgrounds.length : cardCollections.lace.length,
        fashion: cardCollections.fashion.length
      },
      sources: {
        fabricCard: "Images/cardImages",
        laceCard: laceBackgrounds.length > 0 ? "Images/Laces/*" : "Images/cardImages",
        fashionCard: "Images/cardImages"
      }
    };

    totalItems = cardCollections.all.length + laceBackgrounds.length;
    console.log(`  📁 Organized ${totalItems} images for card backgrounds:`);
    console.log(`    🧵 Fabric cards: ${cardCollections.fabrics.length} images (from cardImages)`);
    console.log(`    🕸️ Lace cards: ${manifest.collections.lace} images (from ${manifest.sources.laceCard})`);
    console.log(`    👗 Fashion cards: ${cardCollections.fashion.length} images (from cardImages)`);
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