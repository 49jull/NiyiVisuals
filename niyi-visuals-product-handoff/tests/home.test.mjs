import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');

test('only Home is built; public output contains no planning or migration files', () => {
  const walk = base => readdirSync(base, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(`${base}/${entry.name}`) : [`${base}/${entry.name}`]);
  const files = walk(fileURLToPath(new URL('../dist/', import.meta.url)));
  assert.deepEqual(files.filter(file => file.endsWith('.html')).map(file => file.split('/').at(-1)), ['index.html']);
  for (const file of files) assert.doesNotMatch(file, /PRODUCT|AGENTS|HANDOFF|migration|asset-register|link-register|evidence/);
  assert.doesNotMatch(html, /THESIS:|OWN-WORLD:|publication status|source approval/i);
});
test('all six source placements appear once, with alt text and stable dimensions', () => {
  const ids = [...html.matchAll(/data-photo-id="(NV-HOME-\d+)"/g)].map(match => match[1]);
  assert.deepEqual([...ids].sort(), ['NV-HOME-01', 'NV-HOME-02', 'NV-HOME-03', 'NV-HOME-04', 'NV-HOME-05', 'NV-HOME-06']);
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
  assert.equal(imgs.length, 6);
  for (const img of imgs) { assert.match(img, /alt="[^"]+"/); assert.match(img, /width="\d+"/); assert.match(img, /height="\d+"/); }
  assert.equal(imgs.filter(img => /loading="eager"/.test(img)).length, 1);
  assert.match(imgs[0], /fetchpriority="high"/);
});
test('source prose is preserved and category destinations are consistent', () => {
  for (const text of [
    'Chasing moments, not just poses.', 'Hi, I am Niyi Scholten',
    'Before picking up a camera, I shared the pitch with players who are now performing at the highest level.',
    'What drives my work is that, as a former footballer, others captured my moments.',
    'The best part? Seeing people light up when they relive their moment.',
    "MOMENTS MOVE FAST LET&#39;S FREEZE YOURS. REACH OUT!",
  ]) assert.ok(html.includes(text), `Missing source copy: ${text}`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  for (const route of ['/portfolio/', '/about/', '/services/', '/contact/', '/gallery-1/', '/gallery-2/', '/gallery-3/']) assert.ok(html.includes(`href="${route}"`));
  for (const category of ['sport', 'parties', 'lifestyle']) assert.ok(html.includes(`href="/services/#${category}"`));
  assert.doesNotMatch(html, /href="#"|gallery-4/);
  const features = [...html.matchAll(/<a class="category-feature[^>]*href="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(features, ['/gallery-1/', '/gallery-2/', '/gallery-3/']);
});
test('review remains private and modal controls expose named states', () => {
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.match(html, /<html lang="en"/);
  assert.match(html, /aria-label="Open menu" aria-expanded="false" aria-controls="mobile-navigation"/);
  assert.match(html, /<dialog[^>]*aria-label="Site navigation"/);
  assert.match(html, /href="#main-content"/);
});
test('original supplied evidence remains byte-identical', () => {
  const manifest = JSON.parse(read('../HANDOFF-MANIFEST.json'));
  for (const item of manifest.files) {
    const file = new URL(`../${item.path}`, import.meta.url);
    assert.ok(existsSync(file));
    const bytes = readFileSync(file);
    assert.equal(bytes.byteLength, item.bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), item.sha256);
  }
});
