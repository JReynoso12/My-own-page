/**
 * Removes the .next folder. Stop `npm run dev` first — Windows may lock files
 * (e.g. .next/trace) while the dev server is running.
 */
const fs = require("fs");
const path = require("path");

const dir = path.resolve(process.cwd(), process.env.NEXT_DIST_DIR || ".next");

try {
  fs.rmSync(dir, { recursive: true, force: true });
  console.log("Removed .next");
} catch (e) {
  const msg = e instanceof Error ? e.message : String(e);
  console.error("Could not remove .next:", msg);
  console.error(
    "Stop the dev server (Ctrl+C), close other programs using this project, then run: npm run clean"
  );
  process.exit(1);
}
