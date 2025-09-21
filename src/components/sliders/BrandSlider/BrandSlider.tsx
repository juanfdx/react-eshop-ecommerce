import './BrandSlider.scss';
import { useEffect, useState } from 'react';
// LIBRARY
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// DATA
import { brands } from '../../../data/data-brands';



export const BrandSlider = () => {

  const [slidesToShow, setSlidesToShow] = useState<number>(7);
  const { width } = useWindowSize();
  
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    if (width === undefined) return;

    const size =
      width < 375 ? 2 :
      width < 480 ? 3 :
      width < 576 ? 4 :
      width < 768 ? 5 :
      width < 992 ? 6 :
      7;

    setSlidesToShow(size);
  }, [width]);



  return (
    <section className='brand-slider'>
      <div className='brand-slider__container'>
        <Slider {...settings}>
          {brands?.map((brand, index) => 
            
            <div className='brand-slider__item' key={index}>
              <img className='brand-slider__img' src={brand.image.url} alt={brand.name} />
            </div>
          
          )}
        </Slider>
      </div>
    </section>
  );
}