export interface NavLink {
  id: string;
  path: string;
  label: string;
}


export const navLinks: NavLink[] = [
  { id: '1', path: '/', label: 'home' },
  { id: '2', path: 'products', label: 'products' },
  { id: '3', path: 'about', label: 'about' },
  { id: '4', path: 'contact', label: 'contact' }
];