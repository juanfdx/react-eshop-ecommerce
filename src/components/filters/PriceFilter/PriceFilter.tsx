import './PriceFilter.scss';
import { useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPriceNoFraction } from '../../../utils/currencyUtils';
import { getMinMaxPrice, getPriceSteps } from '../../../utils/productUtils';
import { useFilterStore } from '../../../stores/useFilterStore';

type PriceFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number
};


export const PriceFilter = ({ products,openIndexes, index }: PriceFilterProps) => {

  const { min_price, max_price, setMinPrice, setMaxPrice } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterPriceRef = useRef<HTMLDivElement>(null);
  

  // Calculate min and max prices from all variations
  const { maxPrice } = useMemo(() => getMinMaxPrice(products), [products]);
  
  // Common breakpoints in cents
  const priceSteps = getPriceSteps(maxPrice);

  // const [minSelected, setMinSelected] = useState<number | null>(null);
  // const [maxSelected, setMaxSelected] = useState<number | null>(null);


  const handleMinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? null : parseInt(e.target.value, 10);
    setMinPrice(value);
    updateQuery(value, max_price);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? null : parseInt(e.target.value, 10);
    setMaxPrice(value);
    updateQuery(min_price, value);
  };

  // Update URL query, when null resets
  const updateQuery = (min: number | null, max: number | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (min !== null) {
      newParams.set('minPrice', String(min));
    } else {
      newParams.delete('minPrice');
    }

    if (max !== null) {
      newParams.set('maxPrice', String(max));
    } else {
      newParams.delete('maxPrice');
    }

    setSearchParams(newParams);
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
          value={min_price ?? ''} 
          onChange={handleMinChange}
        >
          <option value="" >
            Min
          </option>
          {priceSteps
            .slice(0, -1) // Exclude last item (max price)
            .filter(step => max_price === null || step < max_price)
            .map((step, i) => (
              <option key={i} value={step}>{formatPriceNoFraction(step)}</option>
            ))}
        </select>

        {/* MAX PRICE */}
        <select 
          id="maxPrice" 
          className='price-filter__select'
          value={max_price ?? ''} 
          onChange={handleMaxChange}
        >
          <option value="" >
            Max
          </option>
          {priceSteps
            .slice(1) // Exclude first item (usually 0)
            .filter(step => min_price === null || step > min_price)
            .map((step, i) => (
              <option key={i} value={step}>{formatPriceNoFraction(step)}</option>
            ))}
        </select>
      </div>

    </div>
  );
};