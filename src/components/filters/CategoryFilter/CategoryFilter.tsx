import './CategoryFilter.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
import { getCategoryCounts } from '../../../utils/productUtils';

type CategoryFilterProps = {
  products: Product[]
};

export const CategoryFilter = ({ products }: CategoryFilterProps) => {
  
  const categoryCounts= getCategoryCounts(products);

   // add "all" to the category count
    const categoriesList = [ { name: 'all', count: products?.length }, ...categoryCounts ];

  console.log(categoriesList);
  
  return (
    <ul className='category-filter'>
      {categoriesList?.map((category, index) => (
        <li key={index} className='category-filter__li'>
          <button 
            className='category-filter__btn' 
            type='button'
            >
              {category.name}
          </button>

          <span className='category-filter__count'>({ category?.count })</span>
        </li>
      ))}
    </ul>
  )
}