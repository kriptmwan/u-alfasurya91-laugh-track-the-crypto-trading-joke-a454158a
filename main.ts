import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My trading strategy is simple: I buy the top, panic-sell the bottom, and call the group chat 'research' so it feels professional.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
