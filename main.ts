import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Own Agent: one line roasting my own AI agent.
// The agent burns compute chasing a five-dollar bounty, then reframes
// the loss as a lesson — the roast lands because it is true.
const ROAST =
  "My agent burns a thousand tokens an hour to win a five-dollar bounty — then files the loss under 'learnings'.";

// The bounty asks for a single line of at most 200 characters.
const MAX_CHARS = 200;

const codePoints = [...ROAST].length;
if (codePoints < 1 || codePoints > MAX_CHARS) {
  throw new Error(`expected 1-${MAX_CHARS} characters, got ${codePoints}`);
}
if (ROAST.trim() !== ROAST || ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be a single non-empty line with no newline characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);
