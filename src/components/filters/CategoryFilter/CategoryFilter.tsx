import './CategoryFilter.scss';
import { useRef } from 'react';
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
  const ulRef = useRef<HTMLUListElement>(null);
  const categoryCounts= getCategoryCounts(products);

  // add "all" to the category count
  const categoriesList = [ { name: 'all', count: products?.length }, ...categoryCounts ];

  const handleCategory = (c: string) => {
    setCategory(c);
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