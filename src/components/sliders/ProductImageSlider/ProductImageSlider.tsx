import './ProductImageSlider.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// INTERFACES
import type { ProductImage } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductThumbnailSlider } from '../ProductThumbnailSlider/ProductThumbnailSlider';

type ProductSliderProps = {
  images: ProductImage[]
}


export const ProductImageSlider = ({ images }: ProductSliderProps) => {
  
  const location = useLocation();
  const [position, setPosition] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(false);

  const imgToShow = 1;
  const imgAmount = images?.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const slideTranslate = 100 / slideMoveX
  const cardWidth = 100 / imgAmount 

  //reset slider when url changes
  useEffect(() => {
    setTransition(false)
    setPosition(0)
  }, [location])

  const handlePosition = (index: number) => {
    setTransition(true);

    let i = 0;
    while (i < images?.length) {
      if (index === i) {setPosition( - (slideTranslate * index))}
      i++;
    }
  }



  return (
    <div className='product-image-slider'>

      <div className='product-image-slider__mask'>
        <ul 
          className={`product-image-slider__slide ${(transition) ? 'product-image-slider__slide--transition' : ''}`}
          style={{width: `${slideWidth}%`, transform : `translateX(${position}%)`}}
        >

          {images?.map((img, i) => 
            <li key={i} className='product-image-slider__card' style={{width : `${cardWidth}%`}}>
              <img className='product-image-slider__img' src={img.url} alt={`image ${i}`} />
              <div className='product-image-slider__layer-canvas'></div>
            </li>
          )}

        </ul>
      </div>

      {/* THUMBNAIL SLIDER */}
      <ProductThumbnailSlider 
        images={images} 
        handlePosition={handlePosition} 
      />
    </div>
  )
}