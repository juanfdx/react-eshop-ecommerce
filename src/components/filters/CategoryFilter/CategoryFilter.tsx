import './CategoryFilter.scss';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { getCategoryCounts } from '../../../utils/filterUtils';
import { updateFilterQueryParam } from '../../../utils/urlUtils';

type CategoryFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number
};


export const CategoryFilter = ({ products, openIndexes, index }: CategoryFilterProps) => {
  
  const { category, setCategory } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams(); 
  const ulRef = useRef<HTMLUListElement>(null);
  const categoryCounts= getCategoryCounts(products);

  // add "all" to the category count
  const categoriesList = [ { name: 'all', count: products?.length }, ...categoryCounts ];

  // Sync store state with URL param
  useEffect(() => {
    const urlCategory = searchParams.get('category');

    if (!urlCategory) {
      setCategory('all'); // Reset to 'all' if no category in URL
    } else {
      setCategory(urlCategory);
    }
  }, [searchParams, setCategory]);

  
  const handleCategory = (c: string) => {
    setCategory(c);
    updateFilterQueryParam('category', c, searchParams, setSearchParams);
  }



  return (
    <ul
      ref={ulRef} 
      className='category-filter'
      style={(openIndexes.has(index)) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >
      {categoriesList?.map((c, index) => (
        <li key={index} className='category-filter__li'>
          <button 
            className={`category-filter__btn ${c.name === category ? 'category-filter__btn--active' : ''}`} 
            type='button'
            onClick={() =>handleCategory(c?.name)}
          >
            {c.name}
          </button>

          <span className='category-filter__count'>({ c?.count })</span>
        </li>
      ))}
    </ul>
  )
}