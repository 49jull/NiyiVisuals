import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const html = read('dist/index.html');
const slugs = ['the-feeling-after','under-the-lights','in-good-company','quiet-presence','in-motion','after-hours','people-as-they-are','on-the-pitch'];

test('all eight selections have shareable static pages and original route entry points', () => {
  for (const slug of slugs) {
    const page = read(`dist/work/${slug}/index.html`);
    assert.match(page, /role="dialog" aria-modal="true" aria-labelledby="project-title"/);
    assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
    assert.match(page, /href="\/#work"/);
    assert.match(page, /class="next-project"/);
    assert.ok(html.includes(`href="/work/${slug}/"`));
  }
  for (const route of ['portfolio','about','contact','gallery-1','gallery-2','gallery-3']) assert.ok(existsSync(new URL(`dist/${route}/index.html`, root)));
  assert.ok(!existsSync(new URL('dist/gallery-4/index.html', root)));
});
test('original Home photographs, prose and genuine contact methods survive the redesign', () => {
  const ids = [...html.matchAll(/data-photo-id="(NV-HOME-\d+)"/g)].map(match => match[1]);
  assert.deepEqual(ids.sort(), ['NV-HOME-01','NV-HOME-02','NV-HOME-03','NV-HOME-04','NV-HOME-05','NV-HOME-06']);
  for (const text of ['Chasing moments, not just poses.','Hi, I am Niyi Scholten','Before picking up a camera, I shared the pitch with players who are now performing at the highest level.','What drives my work is that, as a former footballer, others captured my moments.','The best part? Seeing people light up when they relive their moment.']) assert.ok(html.includes(text), `Missing ${text}`);
  assert.match(html, /MOMENTS MOVE FAST LET(?:&#x27;|&#39;|')S FREEZE YOURS/);
  assert.match(html, /href="mailto:shotsbyniyi@gmail.com"/);
  assert.match(html, /href="tel:\+31642818825"/);
  for (const category of ['sport','parties','lifestyle']) assert.ok(html.includes(`href="/services/#${category}"`));
  assert.doesNotMatch(html, /href="#"|testimonials|awards|filmmaker/i);
});
test('photography has dimensions, descriptive alternatives and responsive sources before hydration', () => {
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
  assert.equal(imgs.length, 9);
  for (const img of imgs) for (const attribute of [/alt="[^"]+"/, /width="\d+"/, /height="\d+"/, /srcSet="[^"]+"/i]) assert.match(img, attribute);
  assert.match(imgs[0], /fetchPriority="high"/i);
  assert.equal(imgs.filter(img => /loading="eager"/.test(img)).length, 2);
  assert.match(html, /aria-label="Gallery layout"/);
  assert.match(html, /aria-label="Filter work by category"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /aria-label="Open menu"[^>]*aria-expanded="false"/);
});
test('preview stays private; research and migration material are excluded', () => {
  const walk = base => readdirSync(base,{withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(`${base}/${entry.name}`) : [`${base}/${entry.name}`]);
  for (const file of walk(fileURLToPath(new URL('dist/',root)))) assert.doesNotMatch(file,/PRODUCT|AGENTS|HANDOFF|migration|asset-register|link-register|evidence/);
  assert.match(html,/name="robots" content="noindex, nofollow"/);
  assert.match(html, /href="#main-content"/);
  assert.doesNotMatch(html,/THESIS:|OWN-WORLD:|publication status|source approval/i);
});
test('all 100 placements stay accounted for and all current manifest entries match', () => {
  const ledger = JSON.parse(read('migration/placement-ledger.json'));
  assert.equal(ledger.length,100);
  assert.equal(new Set(ledger.map(item=>item.id)).size,100);
  for(const item of JSON.parse(read('HANDOFF-MANIFEST.json')).files) {
    const bytes=readFileSync(new URL(item.path,root));
    assert.equal(bytes.byteLength,item.bytes,item.path);
    assert.equal(createHash('sha256').update(bytes).digest('hex'),item.sha256,item.path);
  }
  for(const item of JSON.parse(read('migration/collection-asset-sources.json'))) {
    const bytes=readFileSync(new URL(item.file,root));
    assert.equal(createHash('sha256').update(bytes).digest('hex'),item.localAssetSha256,item.id);
    assert.ok(read('outputs/asset-register.json').includes(item.source),item.source);
  }
});
