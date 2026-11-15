export const routes = {
  home: '/', work: '/portfolio/', services: '/services/', about: '/about/', contact: '/contact/',
  sport: '/gallery-1/', parties: '/gallery-2/', lifestyle: '/gallery-3/',
} as const;
export const categories = [
  { key: 'sport', name: 'Sport', route: routes.sport, service: '/services/#sport', description: 'Match action, feeling and atmosphere.' },
  { key: 'parties', name: 'Parties', route: routes.parties, service: '/services/#parties', description: 'People, parties and important occasions.' },
  { key: 'lifestyle', name: 'Lifestyle', route: routes.lifestyle, service: '/services/#lifestyle', description: 'Relaxed portraits and personal moments.' },
] as const;
export const navigation = [
  { label: 'Work', href: routes.work },
  { label: 'Services', href: routes.services },
  { label: 'About', href: routes.about },
  { label: 'Contact', href: routes.contact },
] as const;
export const contact = {
  email: 'shotsbyniyi@gmail.com', phone: '06-42818825', telephoneUri: 'tel:+31642818825',
  instagram: 'https://www.instagram.com/niyi.visuals?igsh=MXViMG52OGQ3ejFuNw==',
  tiktok: 'https://www.tiktok.com/@niyi.visuals?_t=ZN-8wWRryr8KpT&_r=1',
} as const;
