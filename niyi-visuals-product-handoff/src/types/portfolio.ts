export interface PortfolioImage {
  id: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  focal: string;
}
export interface PortfolioProject {
  slug: string;
  title: string;
  category: 'Sport' | 'Parties' | 'Lifestyle';
  description: string;
  format: string;
  cover: PortfolioImage;
  images: PortfolioImage[];
  arrangement: string;
}
export type GalleryView = 'grid' | 'index';
export type Category = 'All' | PortfolioProject['category'];

export type PortfolioCopy = typeof import('../content/portfolio').portfolioContent;
