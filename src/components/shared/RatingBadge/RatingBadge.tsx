import './RatingBadge.scss';
// COMPONENTS
import { IoStar } from "react-icons/io5";

type RatingBadgeProps = {
  rating: number;
  reviews?: number;
  small?: boolean;
};


export const RatingBadge = ({ rating, reviews, small = false }: RatingBadgeProps) => {
  
  return (
    <div className={`rating-badge ${small ? 'rating-badge--small' : ''}`}>
      {rating.toFixed(1)} <IoStar className={`rating-badge__icon ${small ? 'rating-badge__icon--small' : ''}`} />
      {(reviews && reviews > 0) ? (
        <span className={`rating-badge__reviews ${small ? 'rating-badge__reviews--small' : ''}`}>({reviews})</span>
      ) : null}
    </div>
  )
}