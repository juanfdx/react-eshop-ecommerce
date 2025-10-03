import './ColorFilter.scss';
// INTERFACES
import { useMemo, useRef } from 'react';
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getColorCountsWithHexCode } from '../../../utils/filterUtils';

type ColorFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number
}


export const ColorFilter = ({ products, openIndexes, index }: ColorFilterProps) => {
  
  const { color, setColor } = useFilterStore();
  const ulRef = useRef<HTMLUListElement>(null);

  const uniqueColors = useMemo(() => getColorCountsWithHexCode(products), [products]);


  const handleColor = (c: string) => {
    if (color === c) setColor(null);
    else setColor(c);
  }


  return (
    <ul
      ref={ulRef} 
      className='color-filter'
      style={(openIndexes.has(index)) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >
      {uniqueColors?.map((c, index) => (
        <li key={index} className='color-filter__li'>
          <button 
            type='button' 
            className='color-filter__btn'
            onClick={() => handleColor(c?.name)} 
          >

            <div className='color-filter__box-color' style={{ backgroundColor: c?.code}}> </div>

            <span className={`color-filter__name ${(color === c?.name) ? 'color-filter__name--active' : ''}`}>
              {c?.name}
            </span>
          </button>

          <span className='color-filter__count'>({c?.quantity})</span>
        </li>
      ))}
    </ul>
  )
}