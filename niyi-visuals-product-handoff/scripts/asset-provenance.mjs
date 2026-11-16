import { readdir, readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const sources = [...JSON.parse(await readFile(new URL('migration/home-asset-sources.json', root), 'utf8')), ...JSON.parse(await readFile(new URL('migration/collection-asset-sources.json', root), 'utf8'))];
const directory = new URL('dist/_astro/', root);
let count = 0;
for (const name of await readdir(directory)) {
  const id = name.match(/^(NV-(?:HOME|SPORT|PARTIES|LIFESTYLE)-\d+)/)?.[1];
  if (!id || !/\.(webp|jpg)$/.test(name)) continue;
  const source = sources.find(item => item.id === id);
  if (!source) throw new Error(`Missing photographic source: ${id}`);
  const prompt = `Original client photograph. Source: ${source.source}`;
  const file = new URL(name, directory);
  if (name.endsWith('.jpg')) {
    const bytes = await readFile(file);
    if (!bytes.subarray(0, 2).equals(Buffer.from([0xff, 0xd8]))) throw new Error(`Invalid JPEG: ${name}`);
    const content = Buffer.from(`impeccable:prompt\0${prompt}`, 'utf8');
    const header = Buffer.alloc(4);
    header[0] = 0xff; header[1] = 0xfe; header.writeUInt16BE(content.length + 2, 2);
    if (!bytes.subarray(2, 2 + header.length + content.length).includes(content)) await writeFile(file, Buffer.concat([bytes.subarray(0, 2), header, content, bytes.subarray(2)]));
  } else {
    // Impeccable's supported sidecar fallback preserves WebP pixels unchanged.
    await writeFile(new URL(`${name}.json`, directory), JSON.stringify({ prompt }, null, 2) + '\n');
  }
  count++;
}
console.log(`Preserved origin provenance for ${count} responsive photographs.`);
