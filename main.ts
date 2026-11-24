// Entry for make.fun's post-x-promote-make-your-own-bounty-01 (Node 22, stdlib only).
//
// The entry itself is a post on X: one post of our own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached and our play code in its text. This program
// does the only job the repository has: it copies POST.json, which names that
// post, from the repository root into the output directory, where the house
// reads it and then reads the post's replies, reposts and quotes from X.
// Nothing this program writes about the post is scored.
//
// POST.json still holds a placeholder address until the post is up on X;
// replace it with the real post address before submitting.
//
// Local run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let post: string;
try {
  post = readFileSync(source, 'utf8');
  JSON.parse(post);
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  writeFileSync(target, post);
} catch (err) {
  console.error(`POST.json could not be written to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
