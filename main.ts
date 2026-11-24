import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last text at 1%: the phone dies mid-warning, ignored three times, boss unread.
const LINE =
  "Battery at 1%. This is my last text: I warned you three times, you ignored me three times, and now I die in a parking lot with 47 unread messages, all from your boss.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
