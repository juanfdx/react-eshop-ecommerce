import './CategorySlider.scss';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { Icon } from '../../shared/Icon/Icon';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
// DATA
import { categories } from '../../../data/data-categories';




export const CategorySlider = () => {

  const [index, setIndex] = useState<number>(1);
  const [imgToShow, setImgToShow] = useState<number>(4);
  const [categoriesArray, setCategoriesArray] = useState(categories);
  const [transition, setTransition] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false); //optional
  const { width } = useWindowSize();
  
  const imgAmount = categories?.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const cardWidth = 100 / imgAmount 


  useEffect(() => {
    setTransition(false);

    if (width === undefined) return;

    const size =
      width < 375 ? 1 :
      width < 576 ? 2 :
      width < 768 ? 3 :
      width < 992 ? 4 :
      width < 1200 ? 5 :
      6;

    setImgToShow(size);
  }, [width]);


  const handlePrevImage = () => {
    // prevent fast consecutive clicks
    if (isProcessing) return;
    setIsProcessing(true);
    
    setTransition(true);
    // Move the last item to the beginning of the array
    const newArray = [...categoriesArray];
    const lastImage = newArray.pop(); // Remove the last item
    if (lastImage) { newArray.unshift(lastImage) } // Add it to the beginning

    setIndex((prevIndex) => prevIndex - 1);
    
    setTimeout(() => {
      setCategoriesArray(newArray);
      setIsProcessing(false);
      setTransition(false); // End the transition effect after 500ms (duration of transition)
      setIndex((prevIndex) => prevIndex + 1);
    }, 500);
  };

  // useCallback so handleNextImage is not recreated on every render, unless its dependencies change.
  // if we not use useCallback, handleNextImage will trigger useEffect on L92 every time this fn is created, bc is one of its dependencies
  const handleNextImage = useCallback(() => {
    // prevent fast consecutive clicks
    if (isProcessing) return;
    setIsProcessing(true);

    setTransition(true);
    // Move the first item to the end of the array
    const newArray = [...categoriesArray];
    const firstImage = newArray.shift(); // Remove the first item
    if (firstImage) { newArray.push(firstImage) } // Add it to the end

    setIndex((prevIndex) => prevIndex + 1);
    
    setTimeout(() => {
      setCategoriesArray(newArray);
      setIsProcessing(false);
      setTransition(false); // End the transition effect after 500ms (duration of transition)
      setIndex((prevIndex) => prevIndex - 1);
    }, 500);
  }, [isProcessing, categoriesArray]);


  // Stop timer - optional
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  
  // Start timer - optional
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // this useEffect must be after handleNextImage function declaration
  useEffect(() => {
    if (!isHovered) {     
      const timer = setInterval(handleNextImage, 6000);
      return () => {clearInterval(timer)}
    }
  }, [isHovered, index, handleNextImage]) //optional
  



  return (
    <section className='categories-slider'>
      <div className='categories-slider__container'>
        
        <Title title={'Categories'} />

        <div className='categories-slider__wrapper'>
          <div className='categories-slider__mask'>
            <ul
              className='categories-slider__slide'
              style={{width: `${slideWidth}%`}}
              //optional
              onMouseOver={handleMouseOver} 
              onMouseLeave={handleMouseLeave}
            >
              {categoriesArray.map(cat =>
                <li 
                  style={{
                    width : `${cardWidth}%`,  
                    transform : `translateX(${-100 * index}%)`,
                    transition: transition ? 'transform 0.5s ease-in-out' : 'none',  
                  }}
                  key={cat.id} 
                  className='categories-slider__card'
                >
                  <Link to={'/products'}  className='categories-slider__card-link'>

                    <div className='categories-slider__img-wrapper'>
                      <img className='categories-slider__img' src={cat.image} alt={cat.alt} />
                    </div>

                    <div className='categories-slider__text-wrapper'>
                      <h3 className='categories-slider__card-h3'>{cat.category}</h3>
                    </div>

                    <div className='categories-slider__btn-wrapper'>
                      <button className='categories-slider__btn-link'>
                        <Icon type={'link'} className='categories-slider__btn-icon' />
                      </button>
                    </div>

                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* PREVIOUS AND NEXT BUTTONS */}
          <button 
            className='categories-slider__btn-action categories-slider__btn-action--prev' 
            onClick={handlePrevImage}
          >
            <HiChevronLeft className='categories-slider__icon' />
          </button>

          <button 
            className='categories-slider__btn-action categories-slider__btn-action--next' 
            onClick={handleNextImage}
          >
            <HiChevronRight className='categories-slider__icon' />
          </button>
        </div>

      </div>
    </section>
  )
}