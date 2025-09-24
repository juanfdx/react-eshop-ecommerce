import './OurTeamSlider.scss';
import { useEffect, useState } from 'react';
// LIBRARY
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// INTERFACES
import type { Team } from '../../../data/data-team';
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { ArrowButton } from '../ArrowButton/ArrowButton';

type TeamSliderProps = {
  team : Team[]
}


export const OurTeamSlider = ({team}: TeamSliderProps) => {

  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const { width } = useWindowSize();
  
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <ArrowButton type='next' onClick={() => {}} />,
    prevArrow: <ArrowButton type='prev' onClick={() => {}} />,
  };

  useEffect(() => {
    if (width === undefined) return;

    const size =
      width < 480 ? 1 :
      width < 768 ? 2 :
      width < 992 ? 3 :
      4;

    setSlidesToShow(size);
  }, [width]);
  


  return (
    <section className='our-team-slider'>
      <div className='our-team-slider__container'>

        <Title title={'Our Team'} center={true} />

        <div className='our-team-slider__wrapper'>

          <Slider {...settings}>

            {team?.map(member =>              
              <li className='our-team-slider__card' key={member._id}>
                <div className='our-team-slider__card-link'>
                  <div className='our-team-slider__img-wrapper'>
                    <img 
                      className='our-team-slider__img' 
                      src={member.image.url} 
                      alt={member.name} 
                    />
                  </div>

                  <div className='our-team-slider__text-wrapper'>
                    <span className='our-team-slider__label'>{member?.position}</span>
                    <h4 className='our-team-slider__name'>{member?.name}</h4>
                  </div>
                </div>
              </li>       
            )}    
          </Slider>

        </div>

      </div>
    </section>
  )
}