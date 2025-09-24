import './ProductThumbnailSlider.scss';
import { useEffect, useState } from 'react';
// INTERFACES
import type { ProductImage } from '../../../interfaces/product.interface';
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// COMPONENTS
import { Icon } from '../../shared/Icon/Icon';

type ProductThumbnailSliderProps = {
  images: ProductImage[];
  handlePosition: (index: number) => void;
};


export const ProductThumbnailSlider = ({ images, handlePosition }: ProductThumbnailSliderProps) => {

  const [imgSelected, setImgSelected]     = useState<number>(0);
  const [slidePosition, setSlidePosition] = useState<number>(0)
  const [imgToShow, setImgToShow]   = useState(5);
  const [transition, setTransition] = useState<boolean>(false);

  const { width } = useWindowSize();

  const imgAmount = images?.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const slideTranslate = 100 / slideMoveX
  const cardWidth = 100 / imgAmount


  useEffect(() => {
    setTransition(false);

    if (width === undefined) return;

    const size =
      width < 375 ? 3 :
      width < 576 ? 4 :
      width < 768 ? 5 :
      width < 992 ? 4 :
      5;

    setSlidePosition(0);
    setImgToShow(size);
  }, [width]);


  //translate card by card
  const moveLeft = () => {
    setTransition(true)
    if (slidePosition < 0) { setSlidePosition(slidePosition + cardWidth) }
  }
  
  //translate card by card
  const moveRight = () => {
    setTransition(true)
    if (slidePosition > slideTranslate - 100) { setSlidePosition(slidePosition - cardWidth) }   
  }



  return (
    <div className='product-thumbnail-slider'>
      <div className='product-thumbnail-slider__container'>
        {/* slider buttons */}
        {images?.length > imgToShow &&
          <>
            <button 
              className='product-thumbnail-slider__btn product-thumbnail-slider__btn--left'
              onClick={moveLeft}
            >
              <Icon type={'chevron-left'} className='product-thumbnail-slider__icon' />      
            </button>

            <button 
              className='product-thumbnail-slider__btn product-thumbnail-slider__btn--right'
              onClick={moveRight}
            >
              <Icon type={'chevron-right'} className='product-thumbnail-slider__icon' />
            </button>
          </>
        }

        {/* slider */}
        <div className='product-thumbnail-slider__mask'>
          <ul 
            className={`product-thumbnail-slider__slide ${transition ? 'product-thumbnail-slider__slide--transition' : ''}`}
            style={{width: `${slideWidth}%`, transform : `translateX(${slidePosition}%)`}}
          >
          
            {images?.map((img, index) => 
              <li
                key={index} 
                className={`product-thumbnail-slider__card ${(imgSelected === index) ? 'product-thumbnail-slider__card--active' : ''}`}
                style={{width : `${cardWidth}%`}}
                onClick={()=> { handlePosition(index); setImgSelected(index) }}
              >
                <img className='product-thumbnail-slider__img' src={img?.url} alt={`image ${index}`} />
                <div className='product-thumbnail-slider__layer-canvas'></div>
              </li>
            )}
          
          </ul>
        </div>

      </div>
    </div>
  )
}