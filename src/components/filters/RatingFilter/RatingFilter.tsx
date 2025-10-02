import './RatingFilter.scss';
import { useRef } from 'react';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// COMPONENTS
import { StarRating } from '../../shared/StarRating/StarRating';


type RatingFilterProps = {
  openIndexes: Set<number>;
  index: number
}

export const RatingFilter = ({ openIndexes, index }: RatingFilterProps) => {
  
  const { rating, setRating } = useFilterStore();
  const ulRef = useRef<HTMLUListElement>(null);


  const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = parseFloat(e.target.value); // Convert string to number
    if (rating === selected) setRating(0); // Deselect if same
    else setRating(selected);
  };


  return (
    <ul 
      ref={ulRef} 
      className='rating-filter'
      style={(openIndexes.has(index)) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >

      {[ 4.5, 4.0, 3.5, 3.0 ].map(r =>

        <li key={r} className='rating-filter__li'>

          <div className='rating-filter__wrapper'>
            <input 
              className={`rating-filter__input-radio ${rating === r ? 'rating-filter__input-radio--checked' : ''}`} 
              type="radio" 
              name='rating' 
              value={r} 
              checked={rating === r}
              onChange={handleRating} 
            />
            <StarRating rating={r} size='17px' /> 
          </div>

          <span className='rating-filter__span'>{r?.toFixed(1)} & up</span>
          
        </li>

      )}

    </ul>
  )
}