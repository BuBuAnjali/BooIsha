// scripts/build-media-manifest.mjs
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;
const VIDEO_RE = /\.(mp4|webm|ogg|mov)$/i;

async function buildManifest(subdir, outputName, wrapKey = null) {
  const mediaDir = path.join(ROOT, subdir);
  const outFile = path.join(mediaDir, outputName);

  await fs.mkdir(mediaDir, { recursive: true });

  const files = await fs.readdir(mediaDir);

  const media = files
    .filter((f) => IMAGE_RE.test(f) || VIDEO_RE.test(f))
    .sort((a, b) => a.localeCompare(b));

  const output = wrapKey ? { [wrapKey]: media } : media;

  await fs.writeFile(outFile, JSON.stringify(output, null, 2));
  console.log(`✅ Wrote ${media.length} items to ${outFile}`);
}

async function main() {
  try {
    // Videos manifest (plain array)
    await buildManifest("Videos/videoCard", "manifest.json");

    // Images manifest (wrapped in { fabrics: [] })
    await buildManifest("Images/cardImages", "images.json", "fabrics");

    // Images manifest (wrapped in { fabrics: [] })
    await buildManifest("Images/droppingImages", "manifest.json");

    console.log("🎉 All manifests generated successfully!");
  } catch (err) {
    console.error("❌ Error generating manifests:", err);
    process.exit(1);
  }
}

main();
