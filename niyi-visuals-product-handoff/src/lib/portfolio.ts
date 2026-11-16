import { getImage } from 'astro:assets';
import { collectionImages, projectRecords, portfolioContent } from '../content/portfolio';
import type { ImageKey } from '../content/portfolio';
import type { PortfolioImage, PortfolioProject } from '../types/portfolio';

async function prepareImage(key: ImageKey): Promise<PortfolioImage> {
  const photo = collectionImages[key];
  const widths = [...new Set([480, 960, 1600].map(width => Math.min(width, photo.src.width)))];
  const variants = await Promise.all(widths.map(width => getImage({ src: photo.src, width, format: 'webp', quality: 84 })));
  return {
    id: photo.id, alt: photo.alt, focal: photo.focal, width: photo.src.width, height: photo.src.height,
    src: variants[variants.length - 1]!.src,
    srcSet: variants.map((variant, index) => `${variant.src} ${widths[index]}w`).join(', '),
  };
}
export async function preparePortfolio() {
  const keys = [...new Set<ImageKey>([...projectRecords.flatMap(project => project.images), 'photographer'])];
  const entries = await Promise.all(keys.map(async key => [key, await prepareImage(key)] as const));
  const images = Object.fromEntries(entries) as Record<ImageKey, PortfolioImage>;
  const projects: PortfolioProject[] = projectRecords.map(record => ({
    slug: record.slug, title: record.title, category: record.category, description: record.description,
    arrangement: record.arrangement, format: 'Photography',
    cover: images[record.images[0]!], images: record.images.map(key => images[key]),
  }));
  return { projects, portrait: images.photographer, content: portfolioContent };
}
