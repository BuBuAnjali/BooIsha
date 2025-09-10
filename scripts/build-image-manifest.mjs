// scripts/build-image-manifest.mjs
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const MEDIA_DIR = path.join(ROOT, "Images", "cardImages");
const OUT_FILE = path.join(MEDIA_DIR, "images.json");

// Only images here
const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

async function main() {
  try {
    // Ensure folder exists
    await fs.mkdir(MEDIA_DIR, { recursive: true });

    // Read all files in cardImages
    const files = await fs.readdir(MEDIA_DIR);

    // Filter & sort
    const images = files
      .filter((f) => IMAGE_RE.test(f))
      .sort((a, b) => a.localeCompare(b));

    // Wrap in object for consistency
    const manifest = { fabrics: images };

    // Write images.json
    await fs.writeFile(OUT_FILE, JSON.stringify(manifest, null, 2));
    console.log(`✅ Wrote ${images.length} items to ${OUT_FILE}`);
  } catch (err) {
    console.error("❌ Error generating images.json:", err);
    process.exit(1);
  }
}

main();
