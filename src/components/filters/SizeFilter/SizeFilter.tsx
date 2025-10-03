import './SizeFilter.scss';
import { useMemo, useRef } from 'react';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getSizeCounts } from '../../../utils/filterUtils';

type SizeFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number;
}


export const SizeFilter = ({ products, openIndexes, index }: SizeFilterProps) => {

  const { size, setSize } = useFilterStore();
  const ulRef = useRef<HTMLUListElement>(null);
 
  const uniqueSizes = useMemo(() => getSizeCounts(products), [products]);
  

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSize(size === value ? null : value);
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