// Renders the prerendered /cv page to a PDF with Playwright.
// Usage: node scripts/cv-pdf.mjs [output]   (default: .output/public/cv.pdf)
// Run after `nuxt generate` (`pnpm cv:pdf` does both).
//
// Browser: $CHROMIUM if set, else Playwright's own build when installed (as in
// the mcr.microsoft.com/playwright image CI uses), else a system Chromium.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright-core';

const root = resolve('.output/public');
const output = resolve(process.argv[2] ?? join(root, 'cv.pdf'));

if (!existsSync(join(root, 'cv', 'index.html')))
  throw new Error('No prerendered /cv found, run `nuxt generate` first.');

function findExecutable() {
  if (process.env.CHROMIUM)
    return process.env.CHROMIUM;
  if (existsSync(chromium.executablePath()))
    return undefined;
  const system = ['chromium', 'google-chrome-stable', 'google-chrome']
    .map(bin => spawnSync('which', [bin], { encoding: 'utf8' }).stdout.trim())
    .find(Boolean);
  if (!system)
    throw new Error('No Chromium found, set CHROMIUM to its path.');
  return system;
}

const types = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  let file = join(root, path);
  if (!file.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory())
    file = join(file, 'index.html');
  if (!existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
});

await new Promise(done => server.listen(0, '127.0.0.1', done));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({ executablePath: findExecutable() });
try {
  const page = await browser.newPage();
  // Keep the render offline: no analytics or other third-party requests.
  await page.route('**/*', route => (route.request().url().startsWith(origin) ? route.continue() : route.abort()));
  await page.goto(`${origin}/cv/`, { waitUntil: 'load' });
  await page.evaluate(async () => document.fonts.ready);
  await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
  console.log(`Wrote ${output}`);
}
finally {
  await browser.close();
  server.close();
}
