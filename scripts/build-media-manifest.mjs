import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMAGE_RE = /\.(png|jpg|jpeg|gif|webp|avif|svg)$/i;
const VIDEO_RE = /\.(mp4|webm|ogg|mov)$/i;

async function buildManifest(subdir, outputName = "manifest.json") {
  const mediaDir = path.join(ROOT, subdir);
  const outFile = path.join(mediaDir, outputName);

  await fs.mkdir(mediaDir, { recursive: true });

  const files = await fs.readdir(mediaDir);

  const media = files
    .filter((f) => IMAGE_RE.test(f) || VIDEO_RE.test(f))
    .sort((a, b) => a.localeCompare(b));

  await fs.writeFile(outFile, JSON.stringify(media, null, 2));
  console.log(`✅ Wrote ${media.length} items to ${outFile}`);
}

// Run for multiple directories
await buildManifest("Videos/videoCard", "manifest.json");
await buildManifest("Images/cardImages", "images.json");
