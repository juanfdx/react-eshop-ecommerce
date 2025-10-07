import './SizeFilter.scss';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getSizeCounts } from '../../../utils/filterUtils';
import { updateFilterQueryParam } from '../../../utils/urlUtils';

type SizeFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number;
}


export const SizeFilter = ({ products, openIndexes, index }: SizeFilterProps) => {

  const { size, setSize } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const ulRef = useRef<HTMLUListElement>(null);
 
  const uniqueSizes = useMemo(() => getSizeCounts(products), [products]);
  

  // Sync size from URL → store on load / URL change
  useEffect(() => {
    const urlSize = searchParams.get('size');

    if (!urlSize) {
      setSize(null); // Reset if not in URL
    } else {
      setSize(urlSize);
    }
  }, [searchParams, setSize]);


  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (size === value) {
      setSize(null);
      updateFilterQueryParam('size', null, searchParams, setSearchParams);
    } else {
      setSize(value);
      updateFilterQueryParam('size', value, searchParams, setSearchParams);
    }
  };



  return (
    <ul 
      ref={ulRef}
      className='size-filter'
      style={(openIndexes.has(index)) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >
      {uniqueSizes?.map((s, index) => (
        <li key={index} className='size-filter__li'>
          <div className='size-filter__wrapper'>
            <input 
              id={`size-${s.size}`}
              className={`size-filter__input-checkbox ${size === s.size ? 'size-filter__input-checkbox--checked' : ''}`} 
              type="checkbox" 
              name="size" 
              value={s.size}
              checked={size === s.size}
              onChange={handleSize}
            />

            <label htmlFor={`size-${s.size}`} className='size-filter__label'>
              {s.size}
            </label>
          </div>

          <span className='size-filter__count'>({s?.quantity})</span>

        </li>
      ))}
    </ul>
  )
}