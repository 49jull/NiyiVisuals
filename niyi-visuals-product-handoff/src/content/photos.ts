import type { ImageMetadata } from 'astro';
import celebration from '../assets/photography/NV-HOME-01.jpg';
import photographer from '../assets/photography/NV-HOME-02.jpeg';
import parties from '../assets/photography/NV-HOME-03.jpg';
import sport from '../assets/photography/NV-HOME-04.jpg';
import lifestyle from '../assets/photography/NV-HOME-05.jpg';
import running from '../assets/photography/NV-HOME-06.jpeg';
export interface Photo {
  id: string;
  src: ImageMetadata;
  alt: string;
  focal: string;
  mobileFocal: string;
}
export const photos = {
  celebration: { id: 'NV-HOME-01', src: celebration, alt: 'Football players in blue shirts raise their arms and a trophy in a team celebration.', focal: '50% 60%', mobileFocal: '50% 60%' },
  photographer: { id: 'NV-HOME-02', src: photographer, alt: 'Black-and-white photograph of a photographer leaning into his camera outdoors.', focal: '50% 48%', mobileFocal: '50% 48%' },
  parties: { id: 'NV-HOME-03', src: parties, alt: 'Four friends pose together at a party, photographed with direct flash.', focal: '50% 0%', mobileFocal: '50% 0%' },
  sport: { id: 'NV-HOME-04', src: sport, alt: 'A football player in a blue kit walks beneath bright floodlights on the pitch.', focal: '50% 64%', mobileFocal: '50% 64%' },
  lifestyle: { id: 'NV-HOME-05', src: lifestyle, alt: 'A smiling woman in a light coat stands in front of leafy green trees.', focal: '50% 43%', mobileFocal: '50% 43%' },
  running: { id: 'NV-HOME-06', src: running, alt: 'A photographic sequence shows a sprinter accelerating out of the blocks on a red running track.', focal: '50% 55%', mobileFocal: '50% 55%' },
} satisfies Record<string, Photo>;
