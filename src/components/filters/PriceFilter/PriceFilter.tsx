import './PriceFilter.scss';
import { useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPriceNoFraction } from '../../../utils/currencyUtils';
import { getMinMaxPrice, getPriceSteps } from '../../../utils/productUtils';

type PriceFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number
};


export const PriceFilter = ({ products,openIndexes, index }: PriceFilterProps) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const filterPriceRef = useRef<HTMLDivElement>(null);
  

  // Calculate min and max prices from all variations
  const { maxPrice } = useMemo(() => getMinMaxPrice(products), [products]);
  
  // Common breakpoints in cents
  const priceSteps = getPriceSteps(maxPrice);

  const [minSelected, setMinSelected] = useState<number | null>(null);
  const [maxSelected, setMaxSelected] = useState<number | null>(null);


  const handleMinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setMinSelected(value);
     if (maxSelected !== null) updateQuery(value, maxSelected);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setMaxSelected(value);
    if (minSelected !== null) updateQuery(minSelected, value);
  };

  const updateQuery = (min: number, max: number) => {
    searchParams.set('minPrice', String(min));
    searchParams.set('maxPrice', String(max));
    setSearchParams(searchParams);
  };



  return (
    <div 
      ref={filterPriceRef} 
      className="price-filter"
      style={(openIndexes.has(index)) ? { maxHeight: filterPriceRef.current?.scrollHeight } : { maxHeight: 0 }}
    >
  
      <div className='price-filter__container'>
        {/* MIN PRICE */}
        <select 
          id="minPrice"
          className='price-filter__select' 
          value={minSelected ?? ''} 
          onChange={handleMinChange}
        >
          <option value="" disabled hidden>
            Min
          </option>
          {priceSteps.map((step, i) => (
            <option key={i} value={step}>{formatPriceNoFraction(step)}</option>
          ))}
        </select>

        {/* MAX PRICE */}
        <select 
          id="maxPrice" 
          className='price-filter__select'
          value={maxSelected ?? ''} 
          onChange={handleMaxChange}
        >
          <option value="" disabled hidden>
            Max
          </option>
          {priceSteps
            .filter(step => minSelected === null || step >= minSelected)
            .map((step, i) => (
              <option key={i} value={step}>{formatPriceNoFraction(step)}</option>
            ))}
        </select>
      </div>

    </div>
  );
};