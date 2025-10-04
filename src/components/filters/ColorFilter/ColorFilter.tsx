import './ColorFilter.scss';
import { useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
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
  const [searchParams, setSearchParams] = useSearchParams(); 
  const ulRef = useRef<HTMLUListElement>(null);

  const uniqueColors = useMemo(() => getColorCountsWithHexCode(products), [products]);


  const handleColor = (c: string) => {
    if (color === c) {
      setColor(null);
      updateQuery(null); // Remove from URL
    } else {
      setColor(c);
      updateQuery(c); // Set in URL
    }
  };

  // Update the color query param
  const updateQuery = (selected: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (!selected) {
      newParams.delete('color');
    } else {
      newParams.set('color', selected);
    }

    setSearchParams(newParams);
  };


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