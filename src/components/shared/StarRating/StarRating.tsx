import './StarRating.scss';
// COMPONENTS
import { IoStar, IoStarOutline,  IoStarHalfOutline } from "react-icons/io5";

type StarRatingProps = {
  rating: number
  size?: string
}


export const StarRating = ({rating, size = '18px'}: StarRatingProps) => {
  
  const tempStars = Array.from({length:5}, (_, index)=>{

    //index goes from 0 to 4
    const number = index + 0.5;

    return(
      <span className='one-star-span' key={index} style={{fontSize: size}}>
        { 
          rating >= index + 1 ? ( <IoStar /> ) : 
          rating >= number ? ( <IoStarHalfOutline /> ) : ( <IoStarOutline /> ) 
        }
      </span>
    )

  });

  return (
    <div className='star-rating'>
      {tempStars}
    </div>
  )
}