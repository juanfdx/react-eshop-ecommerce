import './CategoryFilter.scss';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { getCategoryCounts } from '../../../utils/filterUtils';

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

  const handleCategory = (c: string) => {
    setCategory(c);
    updateQuery(c);
  }

  // Update category query param in URL
  const updateQuery = (selected: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (selected === 'all') {
      newParams.delete('category'); // remove if selecting "all"
    } else {
      newParams.set('category', selected);
    }

    setSearchParams(newParams);
  };
  
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