// The Funniest Toaster Error Message — make.fun bounty entry.
//
// Writes one original toaster error message to entry.txt.
// The message is fixed text: a deadpan appliance error code plus a
// weary confession from a toaster that has become mostly crumbs.
// The message is 77 characters: short enough to fit a two-line LCD,
// long enough for the toaster to finish its thought.
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "E-17: Crumb tray full. I am mostly crumbs now, and I have made peace with it.";

function main(): void {
  const chars = [...MESSAGE];
  if (chars.length < 1 || chars.length > 120) {
    throw new Error(`entry must be 1-120 characters, got ${chars.length}`);
  }
  if (MESSAGE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
}

main();
