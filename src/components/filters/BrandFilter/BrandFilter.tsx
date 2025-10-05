import './BrandFilter.scss';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { getBrandCounts } from '../../../utils/filterUtils';

type BrandFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number;
};

export const BrandFilter = ({ products, openIndexes, index }: BrandFilterProps) => {
  const { brand, setBrand } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const ulRef = useRef<HTMLUListElement>(null);
  const brandCounts = getBrandCounts(products);

  // add "all" to the brand count
  const brandsList = [{ name: 'all', count: products?.length }, ...brandCounts];

  const handleBrand = (b: string) => {
    setBrand(b);
    updateQuery(b);
  };

  // Update brand query param in URL
  const updateQuery = (selected: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (selected === 'all') {
      newParams.delete('brand');
    } else {
      newParams.set('brand', selected);
    }
    setSearchParams(newParams);
  };


  return (
    <ul
      ref={ulRef}
      className='brand-filter'
      style={openIndexes.has(index) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >
      {brandsList?.map((b, index) => (
        <li key={index} className='brand-filter__li'>
          <button
            className={`brand-filter__btn ${b.name === brand ? 'brand-filter__btn--active' : ''}`}
            type='button'
            onClick={() => handleBrand(b.name)}
          >
            {b.name}
          </button>

          <span className='brand-filter__count'>({b.count})</span>
        </li>
      ))}
    </ul>
  );
};
