export const BUSINESS_NAME = 'Treescape Living';
export const TAGLINE = 'Crafted by Nature • Styled for Living';
export const PHONE = '7665554027';
export const PHONE_DISPLAY = '76655 54027';
export const EMAIL = 'treescapeliving@gmail.com';

export const ADDRESS = {
  line1: '5/4, 2nd Floor, Rana City Complex',
  line2: 'Opp. Prestige City, Yamare Village',
  street: 'Sarjapur Road',
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '562125',
};

export const FULL_ADDRESS = `${ADDRESS.line1}, ${ADDRESS.line2}, ${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.pincode}`;

export const HOURS = '9:30 AM – 9:30 PM';
export const INSTAGRAM = '@treescapelivingg';
export const INSTAGRAM_URL = 'https://www.instagram.com/treescapelivingg/';

export const WHATSAPP_BASE = 'https://wa.me/917665554027';

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=Treescape+Living+Rana+City+Complex+Sarjapur+Road+Bengaluru';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  'Custom Furniture Design',
  'Space Planning',
  'Delivery & Installation',
  'After-Sales Support',
];
