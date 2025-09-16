import './HeroSlider.scss';
import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// COMPONENTS
import { SliderDots } from '../SliderDots/SliderDots';
// DATA
import { sliderImages } from '../../../data/data-sliders';



export const HeroSlider = () => {

  const timerRef = useRef<number | null>(null); // Persisted timer
  const [position, setPosition] = useState<number>(0)
  const [start, setStart] = useState<boolean>(false);


  const prevImage = () => {
    if (position > 0)  setPosition(position - 1);
    else setPosition(sliderImages.length - 1);
  };

  const nextImage = () => {
    if (position < sliderImages.length - 1) setPosition(position + 1);
    else setPosition(0);
  }
 
  const startTimer = () => {
    setStart(!start)
  }

  const stopTimer = () => {
    if (timerRef.current !== null) clearInterval(timerRef.current);
  }
  
  useEffect(() => {
    timerRef.current = setInterval(() => {
      /* can't pass nextImage() here directly bc since it’s a non-memoized inline function,
         React treats it as a new function on every render, meaning it could theoretically change every time.
      */
      if (position < sliderImages.length - 1) setPosition(position + 1);
      else setPosition(0); 
    }, 10000);
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    }
  }, [position, start])



  return (
    <section className='slider'>
      <div className='slider__container'>

        <div className='slider__slide' onMouseOver={stopTimer} onMouseLeave={startTimer}>

          {sliderImages?.map((img, index) =>

            <img 
              className={`slider__img ${position === index ? 'slider__img--active': ''}`} 
              key={img.id} 
              src={img.image} 
              alt={img.alt} 
            />

          )}

          {/* buttons */}
          <button className='slider__btn slider__btn--prev' onClick={prevImage}>
            <BsChevronLeft className='slider__chevron slider__chevron--left' />
          </button>

          <button className='slider__btn slider__btn--next' onClick={nextImage}>
            <BsChevronRight className='slider__chevron slider__chevron--right' />
          </button>

          {/* slider dots */}
          <SliderDots sliderImages={sliderImages} position={position} setPosition={setPosition} />

        </div>

      </div>
    </section>
  )
}