import './PriceFilter.scss';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPriceNoFraction } from '../../../utils/currencyUtils';
import { getMinMaxPrice, getPriceSteps } from '../../../utils/productUtils';

type PriceFilterProps = {
  products: Product[];
};


export const PriceFilter = ({ products }: PriceFilterProps) => {

  const [searchParams, setSearchParams] = useSearchParams();

  // Calculate min and max prices from all variations
  const { maxPrice } = useMemo(() => getMinMaxPrice(products), [products]);
  
  // Common breakpoints in cents
  const priceSteps = useMemo(() => getPriceSteps(maxPrice), [maxPrice]);

  const [minSelected, setMinSelected] = useState<number>(0);
  const [maxSelected, setMaxSelected] = useState<number>(0);

  // the last breakpoint is the highest available price, update maxSelected
  useEffect(() => {
    if (priceSteps.length > 0 ) {
      const lastStep = priceSteps[priceSteps.length - 1];
      setMaxSelected(lastStep);
    }
  }, [priceSteps]);

  const handleMinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setMinSelected(value);
    updateQuery(value, maxSelected);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setMaxSelected(value);
    updateQuery(minSelected, value);
  };

  const updateQuery = (min: number, max: number) => {
    searchParams.set('minPrice', String(min));
    searchParams.set('maxPrice', String(max));
    setSearchParams(searchParams);
  };




  return (
    <div className="price-filter">
      <label htmlFor="minPrice">Min Price:</label>
      <select id="minPrice" value={minSelected} onChange={handleMinChange}>
        {priceSteps.map((step, i) => (
          <option key={i} value={step}>{formatPriceNoFraction(step)}</option>
        ))}
      </select>

      <label htmlFor="maxPrice">Max Price:</label>
      <select id="maxPrice" value={maxSelected} onChange={handleMaxChange}>
        {priceSteps
          .filter(step => step >= minSelected)
          .map((step, i) => (
            <option key={i} value={step}>{formatPriceNoFraction(step)}</option>
          ))}
      </select>
    </div>
  );
};