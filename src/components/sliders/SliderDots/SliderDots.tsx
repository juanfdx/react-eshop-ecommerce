import './SliderDots.scss';
import type { SliderImage } from '../../../data/data-sliders';


type SliderDotsProps = {
  sliderImages: SliderImage[],
  position: number,
  setPosition: (id: number) => void
}


export const SliderDots = ({ sliderImages, position, setPosition }: SliderDotsProps) => {
  
  return (
    <ul className='slider-dots'>
      {sliderImages?.map((img, index) =>

        <li 
          key={img.id} 
          className={`slider-dots__dot ${(position === index) ? 'slider-dots__dot--active' : ''}`}
          onClick={()=>setPosition(index)} 
        >

        </li>
      )}
    </ul>
  )
}