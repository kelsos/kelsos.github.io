// Renders the prerendered /cv page to public/cv.pdf with headless Chromium.
// Run after `nuxt generate` (`pnpm cv:pdf` does both). Commit the result.
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';
import process from 'node:process';

const root = resolve('.output/public');
const output = resolve('public/cv.pdf');
const browser = process.env.CHROMIUM ?? ['chromium', 'google-chrome-stable', 'google-chrome']
  .find(bin => spawnSync('which', [bin]).status === 0);

if (!existsSync(join(root, 'cv', 'index.html')))
  throw new Error('No prerendered /cv found, run `nuxt generate` first.');
if (!browser)
  throw new Error('Chromium not found, set CHROMIUM to its path.');

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

server.listen(0, '127.0.0.1', () => {
  const { port } = server.address();
  // Async spawn: a sync one would block the event loop serving the page.
  const chromium = spawn(browser, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    // Keep the render offline (no analytics or other third-party requests).
    '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=5000',
    `--print-to-pdf=${output}`,
    `http://127.0.0.1:${port}/cv/`,
  ], { stdio: 'inherit' });
  chromium.on('exit', (code) => {
    server.close();
    if (code !== 0)
      process.exit(code ?? 1);
    console.log(`Wrote ${output}`);
  });
});
