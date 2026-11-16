import { home } from './home';
import { contact, categories } from './site';
import type { ImageMetadata } from 'astro';
import { photos } from './photos';
import sport01 from '../assets/collections/NV-SPORT-01.jpg';
import sport02 from '../assets/collections/NV-SPORT-02.jpg';
import sport04 from '../assets/collections/NV-SPORT-04.jpg';
import sport05 from '../assets/collections/NV-SPORT-05.jpg';
import sport13 from '../assets/collections/NV-SPORT-13.jpg';
import sport20 from '../assets/collections/NV-SPORT-20.jpg';
import sport23 from '../assets/collections/NV-SPORT-23.jpg';
import parties01 from '../assets/collections/NV-PARTIES-01.jpg';
import parties02 from '../assets/collections/NV-PARTIES-02.jpg';
import parties03 from '../assets/collections/NV-PARTIES-03.jpg';
import parties04 from '../assets/collections/NV-PARTIES-04.jpg';
import parties08 from '../assets/collections/NV-PARTIES-08.jpg';
import lifestyle04 from '../assets/collections/NV-LIFESTYLE-04.jpg';
import lifestyle07 from '../assets/collections/NV-LIFESTYLE-07.jpg';
import lifestyle11 from '../assets/collections/NV-LIFESTYLE-11.jpg';
import lifestyle12 from '../assets/collections/NV-LIFESTYLE-12.jpg';
import lifestyle18 from '../assets/collections/NV-LIFESTYLE-18.jpg';
import lifestyle24 from '../assets/collections/NV-LIFESTYLE-24.jpg';

const image = (id: string, src: ImageMetadata, alt: string, focal = '50% 50%') => ({ id, src, alt, focal });
export const collectionImages = {
  ...photos,
  sport01: image('NV-SPORT-01', sport01, 'A football team in black and red kits poses together on a sunlit pitch.'),
  sport02: image('NV-SPORT-02', sport02, 'Motion blur follows two football players running after the ball.'),
  sport04: image('NV-SPORT-04', sport04, 'A football player in black and red prepares to kick a ball on the grass.'),
  sport05: image('NV-SPORT-05', sport05, 'Two basketball players contest the ball during an outdoor game.'),
  sport13: image('NV-SPORT-13', sport13, 'An athlete stretches beside a football on an enclosed outdoor pitch.'),
  sport20: image('NV-SPORT-20', sport20, 'A group celebrates together behind a large champions banner.'),
  sport23: image('NV-SPORT-23', sport23, 'Football players in white and red run across a floodlit pitch.'),
  parties01: image('NV-PARTIES-01', parties01, 'Friends smile with their arms around one another at an indoor party.'),
  parties02: image('NV-PARTIES-02', parties02, 'Two guests laugh together while holding drinks at a party.'),
  parties03: image('NV-PARTIES-03', parties03, 'Party guests gather around a small bar beneath warm lights.'),
  parties04: image('NV-PARTIES-04', parties04, 'A group of friends holds one laughing guest across their arms.'),
  parties08: image('NV-PARTIES-08', parties08, 'Three friends raise their glasses to the camera in a dim room.'),
  lifestyle04: image('NV-LIFESTYLE-04', lifestyle04, 'A closely cropped photograph of a person wearing a white T-shirt.'),
  lifestyle07: image('NV-LIFESTYLE-07', lifestyle07, 'A seated person is framed by softly blurred flowers in warm indoor light.'),
  lifestyle11: image('NV-LIFESTYLE-11', lifestyle11, 'A person in a black shirt stands with folded arms against a warm neutral backdrop.'),
  lifestyle12: image('NV-LIFESTYLE-12', lifestyle12, 'A smiling person in a pink shirt turns toward the camera in a public interior.'),
  lifestyle18: image('NV-LIFESTYLE-18', lifestyle18, 'A person in a vivid blue hooded jacket looks downward against a pale background.'),
  lifestyle24: image('NV-LIFESTYLE-24', lifestyle24, 'A person sits behind an open laptop at a wooden table in warm light.'),
};

export type ImageKey = keyof typeof collectionImages;
interface ProjectRecord {
  slug: string;
  title: string;
  category: 'Sport' | 'Parties' | 'Lifestyle';
  description: string;
  images: ImageKey[];
  arrangement: string;
}

// Descriptive editorial selections from existing collections, not asserted commissions.
export const projectRecords: ProjectRecord[] = [
  { slug: 'the-feeling-after', title: 'The feeling after', category: 'Sport', description: 'Raised arms, shared celebrations and the people on both sides of the result. A selection from my Sport collection.', images: ['celebration', 'sport01', 'sport20'], arrangement: 'opening' },
  { slug: 'under-the-lights', title: 'Under the lights', category: 'Sport', description: 'Players, movement and the atmosphere of the floodlit pitch. A selection from my Sport collection.', images: ['sport', 'sport23', 'sport02'], arrangement: 'portrait-right' },
  { slug: 'in-good-company', title: 'In good company', category: 'Parties', description: 'Friends in the frame. Direct flash, spontaneous expressions and people enjoying the moment. A selection from my Parties collection.', images: ['parties', 'parties01', 'parties04'], arrangement: 'portrait-left' },
  { slug: 'quiet-presence', title: 'Quiet presence', category: 'Lifestyle', description: 'Portraits in warm light, with a little space for personality. A selection from my Lifestyle collection.', images: ['lifestyle11', 'lifestyle07', 'lifestyle24'], arrangement: 'portrait-inset' },
  { slug: 'in-motion', title: 'In motion', category: 'Sport', description: 'From the starting blocks to the ball in play. Different sports, connected by movement. A selection from my Sport collection.', images: ['running', 'sport02', 'sport05'], arrangement: 'landscape-break' },
  { slug: 'after-hours', title: 'After hours', category: 'Parties', description: 'A bar, a raised glass and a room full of people. A selection from my Parties collection.', images: ['parties03', 'parties02', 'parties08'], arrangement: 'landscape-left' },
  { slug: 'people-as-they-are', title: 'People, as they are', category: 'Lifestyle', description: 'Expressions, details and everyday encounters. A selection from my Lifestyle collection.', images: ['lifestyle', 'lifestyle12', 'lifestyle04', 'lifestyle18'], arrangement: 'portrait-last' },
  { slug: 'on-the-pitch', title: 'On the pitch', category: 'Sport', description: 'Before the kick, between the plays. A selection of football photographs from my Sport collection.', images: ['sport04', 'sport13', 'sport02'], arrangement: 'closing' },
];


export const portfolioContent = {
  name: 'Niyi Scholten', brand: 'Niyi.visuals', location: 'Apeldoorn, The Netherlands',
  profession: 'Sport, parties & lifestyle photography', home, contact, services: categories,
  collectionNote: 'Eight photographic selections. Sport, parties and the moments in between.',
} as const;
