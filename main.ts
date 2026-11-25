import { mkdirSync, writeFileSync } from "node:fs";

// Laugh Track entry: one line about crypto and trading life (<= 200 chars).
const JOKE =
  "My trading strategy is simple: I buy the top, panic-sell the bottom, and call the group chat 'research' so it feels professional.";

function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 chars, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
