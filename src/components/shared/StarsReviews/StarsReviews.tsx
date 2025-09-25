import './StarsReviews.scss';
// COMPONENTS
import { IoStar, IoStarOutline, IoStarHalfOutline } from "react-icons/io5";

type StarsReviewsProps = {
  rating: number;
  reviews: number;
}

export const StarsReviews = ({ rating, reviews }: StarsReviewsProps) => {

  const tempStars = Array.from({length:5}, (_, index)=>{
    //index goes from 0 to 4
    const number = index + 0.5;

    return(
      <span className='single-star-span' key={index}>
        { 
          rating >= index + 1 ? ( <IoStar /> ) : 
          rating >= number ? ( <IoStarHalfOutline /> ) : ( <IoStarOutline /> ) 
        }
      </span>
    )
  });
  

  return (
    <div className='stars-reviews'>
      {rating > 0 &&
        <span className='stars-reviews__rating'>{rating.toFixed(1)}</span>
      }

      <div className="stars-reviews__stars">{tempStars}</div>

      {reviews > 0 ? (
        <p className='stars-reviews__reviews'>
          <span className='stars-reviews__reviews-number'>{reviews}</span> customer reviews 
        </p> 

      ) : (
        <p className='stars-reviews__reviews'>
           no reviews yet 
        </p> 
      )}
    </div>
  )
}