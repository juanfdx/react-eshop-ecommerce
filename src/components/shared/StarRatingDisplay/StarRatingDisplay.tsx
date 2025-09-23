import './StarRatingDisplay.scss';
// COMPONENTS
import { IoStar, IoStarHalfOutline, IoStarOutline } from 'react-icons/io5';

type StarsReviewsProps = {
  rating: number;
  reviews: number;
}


export const StarRatingDisplay = ({ rating, reviews }: StarsReviewsProps) => {
  
  const tempStars = Array.from({length:5}, (_, index)=> {

    //index goes from 0 to 4
    const number = index + 0.5;

    return(
      <span className='star-rating-display-span' key={index}>
        { 
          rating >= index + 1 ? ( <IoStar /> ) : 
          rating >= number ? ( <IoStarHalfOutline /> ) : ( <IoStarOutline /> ) 
        }
      </span>
    )
  });
  

  return (
    <div className='star-rating-display'>
      {rating > 0 &&
        <span className='star-rating-display__rating'>{rating.toFixed(1)}</span>
      }

      <div className="star-rating-display__stars">{tempStars}</div>

      {reviews > 0 ? (
        <p className='star-rating-display__reviews'>
          <span className='star-rating-display__reviews-number'>{reviews}</span> customer reviews 
        </p> 

      ) : (
        <p className='star-rating-display__reviews'>
           no reviews yet 
        </p> 
      )}
    </div>
  )
}