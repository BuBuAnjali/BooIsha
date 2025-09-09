// scripts/build-media-manifest.mjs
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const MEDIA_DIR = path.join(ROOT, "Videos", "videoCard");
const OUT_FILE = path.join(MEDIA_DIR, "manifest.json");

// File patterns to include
const VIDEO_RE = /\.(mp4|webm|ogg|mov)$/i;
const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

async function main() {
  try {
    // Ensure folder exists
    await fs.mkdir(MEDIA_DIR, { recursive: true });

    // Read all files in videoCard
    const files = await fs.readdir(MEDIA_DIR);

    // Filter & sort
    const media = files
      .filter((f) => VIDEO_RE.test(f) || IMAGE_RE.test(f))
      .sort((a, b) => a.localeCompare(b));

    // Write manifest.json
    await fs.writeFile(OUT_FILE, JSON.stringify(media, null, 2));
    console.log(`✅ Wrote ${media.length} items to ${OUT_FILE}`);
  } catch (err) {
    console.error("❌ Error generating manifest.json:", err);
    process.exit(1);
  }
}

main();
