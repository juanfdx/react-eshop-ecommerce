import './ColorFilter.scss';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getColorCountsWithHexCode } from '../../../utils/filterUtils';
import { updateFilterQueryParam } from '../../../utils/urlUtils';

type ColorFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number
}


export const ColorFilter = ({ products, openIndexes, index }: ColorFilterProps) => {
  
  const { baseColor, setBaseColor } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams(); 
  const ulRef = useRef<HTMLUListElement>(null);

  const uniqueColors = useMemo(() => getColorCountsWithHexCode(products), [products]);


  // Sync store state with URL param
  useEffect(() => {
    const urlColor = searchParams.get('color');

    if (!urlColor) {
      setBaseColor(null); // Reset to 'all' if no Color in URL
    } else {
      setBaseColor(urlColor);
    }
  }, [searchParams, setBaseColor]);


  const handleColor = (c: string) => {
    if (baseColor === c) {
      setBaseColor(null);
      updateFilterQueryParam('color', null, searchParams, setSearchParams);
    } else {
      setBaseColor(c);
      updateFilterQueryParam('color', c, searchParams, setSearchParams);
    }
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
            onClick={() => handleColor(c?.baseColor)} 
          >

            <div className='color-filter__box-color' style={{ backgroundColor: c?.code}}> </div>

            <span className={`color-filter__name ${(baseColor === c?.baseColor) ? 'color-filter__name--active' : ''}`}>
              {c?.baseColor}
            </span>
          </button>

          <span className='color-filter__count'>({c?.quantity})</span>
        </li>
      ))}
    </ul>
  )
}