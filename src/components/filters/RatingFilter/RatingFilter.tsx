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


  const handleRating = (r: number) => {
    if (rating === r) setRating(0);
    else setRating(r);
  }


  return (
    <ul 
      ref={ulRef} 
      className='rating-filter'
      style={(openIndexes.has(index)) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >

      {[ 4.5, 4.0, 3.5, 3.0 ].map(r =>

        <li key={r} className='rating-filter__li-item'>

          <div className='rating-filter__wrapper'>
            <input 
              className={`rating-filter__input-radio ${rating === r ? 'rating-filter__input-radio--checked' : ''}`} 
              type="radio" 
              name='rating' 
              value={r} 
              onClick={() =>handleRating(r)} 
            />
            <StarRating rating={r} size='17px' /> 
          </div>

          <span className='rating-filter__span'>{r?.toFixed(1)} & up</span>
          
        </li>

      )}

    </ul>
  )
}