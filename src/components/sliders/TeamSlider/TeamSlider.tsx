import './TeamSlider.scss';
import { useCallback, useEffect, useState } from 'react';
// INTERFACES
import type { Team } from '../../../data/data-team';
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


type TeamSliderProps = {
  team : Team[]
}

// to work fine. You need 2 more cards than those shown. so if you have 4 cards, you need 6
export const TeamSlider = ({ team }: TeamSliderProps) => {

  const [index, setIndex] = useState<number>(1);
  const [imgToShow, setImgToShow] = useState<number>(4);
  const [teamArray, setTeamArray] = useState(team);
  const [transition, setTransition] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
  const { width } = useWindowSize();

  const imgAmount = team?.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const cardWidth = 100 / imgAmount 


  useEffect(() => {
    setTransition(false);
  
    if (width === undefined) return;
  
    const size =
      width < 576 ? 1 :
      width < 768 ? 2 :
      width < 992 ? 3 :
      4;
  
    setImgToShow(size);
  }, [width]);


  // PREV
  const handlePrevImage = () => {
    // prevent fast consecutive clicks
    if (isProcessing) return;
    setIsProcessing(true);
    
    setTransition(true);
    // Move the last item to the beginning of the array
    const newArray = [...teamArray];
    const lastImage = newArray.pop(); // Remove the last item
    if (lastImage) { newArray.unshift(lastImage) } // Add it to the beginning

    setIndex((prevIndex) => prevIndex - 1);
    
    setTimeout(() => {
      setTeamArray(newArray);
      setIsProcessing(false);
      setTransition(false); // End the transition effect after 500ms (duration of transition)
      setIndex((prevIndex) => prevIndex + 1);
    }, 500);
  };

  // NEXT
  const handleNextImage = useCallback(() => {
    // prevent fast consecutive clicks
    if (isProcessing) return;
    setIsProcessing(true);

    setTransition(true);
    // Move the first item to the end of the array
    const newArray = [...teamArray];
    const firstImage = newArray.shift(); // Remove the first item
    if (firstImage) { newArray.push(firstImage) } // Add it to the end

    setIndex((prevIndex) => prevIndex + 1);
    
    setTimeout(() => {
      setTeamArray(newArray);
      setIsProcessing(false);
      setTransition(false); // End the transition effect after 500ms (duration of transition)
      setIndex((prevIndex) => prevIndex - 1);
    }, 500);
  }, [isProcessing, teamArray]);


  
  return (
    <section className='team-slider'>
      <div className='team-slider__container'>

        <Title title={'Our Team'} center={true} />
        
        <div className='team-slider__wrapper'>

          {/* SLIDER */}
          <div className='team-slider__mask'>
            <ul 
              className='team-slider__slide'
              style={{width: `${slideWidth}%`}}
            >
              {teamArray.map(member => 
                <li
                  key={member._id} 
                  className='team-slider__card'
                  style={{
                    width : `${cardWidth}%`,  
                    transform: (imgAmount >= imgToShow + 2) ? `translateX(${-100 * index}%)` : 'translateX(0%)',
                    transition: transition ? 'transform 0.5s ease-in-out' : 'none',  
                  }}
                >
                  <div className='team-slider__card-link'>
                    <div className='team-slider__img-wrapper'>
                      <img 
                        className='team-slider__img' 
                        src={member?.image?.url} 
                        alt={member?.name} 
                      />
                    </div>

                    <div className='team-slider__text-wrapper'>
                      <span className='team-slider__label'>{member?.position}</span>
                      <h4 className='team-slider__name'>{member?.name}</h4>
                    </div>
                  </div>
                </li>
              )}

            </ul>
          </div>

          {/* BUTTONS */}
          <button className='team-slider__btn team-slider__btn--prev' onClick={handlePrevImage}>
            <BsChevronCompactLeft className='team-slider__chevron' />
          </button>

          <button className='team-slider__btn team-slider__btn--next' onClick={handleNextImage} >
            <BsChevronCompactRight className='team-slider__chevron' />
          </button>

        </div>

      </div>
    </section>
  )
}