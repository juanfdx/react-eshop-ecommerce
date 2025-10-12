import './CustomPriceFilter.scss';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getMinMaxPrice, getPriceSteps } from '../../../utils/productUtils';
// COMPONENTS
import { CustomPriceSelect } from '../CustomPriceSelect/CustomPriceSelect';

type CustomPriceFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number
};


export const CustomPriceFilter = ({ products,openIndexes, index }: CustomPriceFilterProps) => {

  const { min_price, max_price, setMinPrice, setMaxPrice } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterPriceRef = useRef<HTMLDivElement>(null);
  
  // Calculate min and max prices from all variations
  const { maxPrice } = useMemo(() => getMinMaxPrice(products), [products]);
  
  // Common breakpoints in cents
  const priceSteps = getPriceSteps(maxPrice);

  

  // Sync store state with URL params
  useEffect(() => {
    const urlMin = searchParams.get('min_price');
    const urlMax = searchParams.get('max_price');

    if (urlMin) {
      const parsedMin = parseFloat(urlMin);
      if (!isNaN(parsedMin)) setMinPrice(parsedMin);
    } else {
      setMinPrice(null);
    }

    if (urlMax) {
      const parsedMax = parseFloat(urlMax);
      if (!isNaN(parsedMax)) setMaxPrice(parsedMax);
    } else {
      setMaxPrice(null);
    }
  }, [searchParams, setMinPrice, setMaxPrice]);


  // Update URL query, when null resets
  const updateQuery = (min: number | null, max: number | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (min !== null && min !== 0) newParams.set('min_price', String(min));
    else newParams.delete('min_price');
    
    if (max !== null) newParams.set('max_price', String(max));
    else newParams.delete('max_price');
    
    // Always reset pagination on filter changes
    newParams.delete('page');

    setSearchParams(newParams);
  };


  const handleMinChange = (val: string) => {
    console.log(val);
    
    const parsed = val === '' ? 0 : parseInt(val, 10);
    setMinPrice(parsed);
    updateQuery(parsed, max_price);
  };

  const handleMaxChange = (val: string) => {
    const parsed = val === '' ? null : parseInt(val, 10);
    setMaxPrice(parsed);
    updateQuery(min_price, parsed);
  };


  

  return (
    <div 
      ref={filterPriceRef} 
      className="custom-price-filter"
      style={(openIndexes.has(index)) 
        ? { maxHeight: filterPriceRef.current?.scrollHeight } 
        : { maxHeight: 0 }
      }
    >
      {/* if parent overflow is clip, dropdown from custom filter will be hidden */}
      <div className='custom-price-filter__container'>
        {/* MIN PRICE */}
        <CustomPriceSelect
          label="Min"
          steps={priceSteps}
          value={min_price}
          onChange={handleMinChange}
          type="min"
          relatedValue={max_price}
        />

        <CustomPriceSelect
          label="Max"
          steps={priceSteps}
          value={max_price}
          onChange={handleMaxChange}
          type="max"
          relatedValue={min_price}
        />
      </div>

    </div>
  );
};