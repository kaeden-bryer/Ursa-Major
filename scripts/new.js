import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: pnpm new <path>');
  console.error('Example: pnpm new guides/test');
  process.exit(1);
}

const filePath = args[0];
const fullPath = path.join('src/content/docs', filePath + '.md');
const dir = path.dirname(fullPath);

// Create directories if they don't exist
fs.mkdirSync(dir, { recursive: true });

// Create the file with frontmatter
const content = `---
title:
description:
---

`;

fs.writeFileSync(fullPath, content);
console.log(`✓ Created ${fullPath}`);
