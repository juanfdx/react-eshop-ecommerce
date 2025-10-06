import './RatingFilter.scss';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
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
  const [searchParams, setSearchParams] = useSearchParams(); 
  const ulRef = useRef<HTMLUListElement>(null);


  // Sync store state with URL param
  useEffect(() => {
    const urlRating = searchParams.get('rating');

    if (!urlRating) {
      setRating(0); // Reset to 'all' if no category in URL
    } else {
      setRating(parseFloat(urlRating));
    }
  }, [searchParams, setRating]);


  const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const selected = parseFloat(e.target.value);

    if (rating === selected) {
      setRating(0);
      updateQuery(null); // Remove from URL
    } else {
      setRating(selected);
      updateQuery(selected); // Add to URL
    }
  };

  // Add query update helper
  const updateQuery = (value: number | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value === null) {
      newParams.delete('rating');
    } else {
      newParams.set('rating', value.toString());
    }
    setSearchParams(newParams);
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
              className={`rating-filter__input-checkbox ${rating === r ? 'rating-filter__input-checkbox--checked' : ''}`} 
              type="checkbox" 
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