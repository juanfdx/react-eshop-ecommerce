import img1 from '../assets/images/slider/slider-img_1.webp';
import img2 from '../assets/images/slider/slider-img_2.webp';
import img3 from '../assets/images/slider/slider-img_3.webp';


export interface SliderImage {
  id    : string;
  image : string;
  alt   : string;
}


export const sliderImages: SliderImage[] = [
  {
    id    :' 1',
    image : img1,
    alt   : 'frontend developer'
  },
  {
    id    : '2',
    image : img2,
    alt   : 'girl with iphone'
  },
  {
    id    : '3',
    image : img3,
    alt   : 'winning a pc game'
  },
]