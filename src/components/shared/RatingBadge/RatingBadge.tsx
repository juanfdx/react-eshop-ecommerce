import './RatingBadge.scss';
// COMPONENTS
import { IoStar } from "react-icons/io5";


export const RatingBadge = ({ rating }: { rating: number }) => {
  
  return (
    <span className='rating-badge'>
      {rating.toFixed(1)} <IoStar className='rating-badge__icon' />
    </span>
  )
}