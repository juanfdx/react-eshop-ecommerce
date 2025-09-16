import './Categories.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { Icon } from '../../shared/Icon/Icon';
// DATA
import { categories } from '../../../data/data-categories';



export const Categories = () => {

  const timerRef = useRef<number | null>(null); // ✅ Ref to persist timer
  const [start, setStart] = useState(false);
  const [position, setPosition] = useState(0);
  const [imgToShow, setImgToShow] = useState(3);//equal to 3 so it restarts when refresh
  const [transition, setTransition] = useState(false);

  const { width } = useWindowSize();

  const imgAmount = categories.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const slideTranslate = 100 / slideMoveX
  const cardWidth = 100 / imgAmount 

  //translate card by card
  // const prevImage = () => {
  //   setTransition(true);
  //   if (position < 0) { setPosition(position + cardWidth) }
  // }

  // //translate card by card
  // const nextImage = () => {
  //   setTransition(true);
  //   if (position > slideTranslate - 100) { setPosition(position - cardWidth) } 
  //   else { setPosition(0) }  
  // }

  const startTimer = () => {
    setStart(!start)
  }

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }
  
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTransition(true);
      // like execute nextImage()
      setPosition(prev => {
        const next = prev > slideTranslate - 100 ? prev - cardWidth : 0;
        return next;
      }); 

    }, 6000);
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [ start, slideTranslate, cardWidth, width])


  useEffect(() => {
    setTransition(false);

    if (width === undefined) return;

    const size =
      width < 576 ? 1 :
      width < 768 ? 2 :
      width < 992 ? 3 :
      4;

    setImgToShow(size);
  }, [width])



  return (
    <section className='categories'>
      <div className='categories__container'>
        
        <Title title={'Categories'} />

        <div className='categories__mask'>
          <ul 
            className={`categories__slide ${(transition) ? 'categories__slide--transition' : ''}`} 
            style={{width: `${slideWidth}%`, transform : `translateX(${position}%)`}}
            onMouseOver={stopTimer}
            onMouseLeave={startTimer}
          >
            {categories?.map(cat => 
              <li key={cat.id} className='categories__card' style={{width : `${cardWidth}%`}}>
                <Link to={'/products'}  className='categories__card-link' >

                  <div className='categories__img-wrapper'>
                    <img className='categories__img' src={cat.image} alt={cat.alt} />
                  </div>

                  <div className='categories__text-wrapper'>
                    <h3 className='categories__card-h3'>{cat.category}</h3>
                  </div>

                  <div className='categories__btn-wrapper'>
                    <button className='categories__btn'>
                      <Icon type={'link'} className='categories__btn-icon' />
                    </button>
                  </div>

                </Link>
              </li>
            )}     
          </ul>
        </div>

      </div>
    </section>
  )
}