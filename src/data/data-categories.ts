import cameras from '../assets/images/categories/cameras.webp';
import laptops from '../assets/images/categories/laptops.webp';
import smartphones from '../assets/images/categories/smartphones.webp';
import tablets from '../assets/images/categories/tablets.webp';
import televisions from '../assets/images/categories/televisions.webp';
import headphones from '../assets/images/categories/headphones.webp';
import speakers from '../assets/images/categories/speakers.webp';
import earphones from '../assets/images/categories/earphones.webp';
import smartWatches from '../assets/images/categories/smartWatches.webp';


export interface Category {
  id       : number;
  category : string;
  image    : string;
  alt      : string;
}


export const categories: Category[] = [
  {
    id       :  1,
    category : 'cameras',
    image    : cameras,
    alt      : 'camera image'
  },
  {
    id       : 2,
    category : 'smartphones',
    image    : smartphones,
    alt      : 'smartphone image'
  },
  {
    id       : 3,
    category : 'tablets',
    image    : tablets,
    alt      : 'tablet image'
  },
  {
    id       : 4,
    category : 'laptops',
    image    : laptops,
    alt      : 'laptop image'
  },
  {
    id       : 5,
    category : 'televisions',
    image    : televisions,
    alt      : 'television image'
  },
  {
    id       : 6,
    category : 'headphones',
    image    : headphones,
    alt      : 'headphones image'
  },
  {
    id       : 7,
    category : 'speakers',
    image    : speakers,
    alt      : 'speakers image'
  },
  {
    id       : 8,
    category : 'smartWatches',
    image    : smartWatches,
    alt      : 'smartWatch image'
  },
  {
    id       : 9,
    category : 'earphones',
    image    : earphones,
    alt      : 'earphones image'
  },
];