import './ArrowButton.scss';
// COMPONENTS
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


type NextArrowButtonProps = {
  type: 'prev' | 'next',
  onClick: () => void
};



export const ArrowButton = ({ type = 'prev', onClick }: NextArrowButtonProps) => {
  
  return (
    <button 
      className={`arrow-btn ${type === 'prev' ? 'arrow-btn--prev' : 'arrow-btn--next'}`} 
      onClick={onClick}
    >
      {type === 'prev' && <BsChevronCompactLeft className='arrow-btn__icon' />}
      {type === 'next' && <BsChevronCompactRight className='arrow-btn__icon' />}
    </button>
  )
}