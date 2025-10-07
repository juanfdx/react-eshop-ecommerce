import './ProductViewControls.scss';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore, type SortType } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { updateFilterQueryParam } from '../../../utils/urlUtils';
// COMPONENTS
import { TfiLayoutGrid2, TfiLayoutListThumb } from 'react-icons/tfi';
import { FormUISelect } from '../../form/FormUISelect/FormUISelect';
// DATA
import { sortOptions } from '../../../data/data-selectors';

type ProductViewControlsProps = {
  products: Product[];
  filteredProducts: Product[];
}


export const ProductViewControls = ({ products, filteredProducts }: ProductViewControlsProps) => {
  
  const { layout, setLayout, sort, setSort } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams(); 


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as SortType);
    updateFilterQueryParam('sort', event.target.value, searchParams, setSearchParams);
  };

  
  // Sync sort from URL to store
  useEffect(() => {
    const urlSort = searchParams.get('sort') as SortType | null;
    const validSorts: SortType[] = [
      'newest', 'top_rated', 'price_lowest',
      'price_highest', 'name_asc', 'name_desc'
    ];

    if (!urlSort || !validSorts.includes(urlSort)) {
      setSort('newest'); // Default
    } else {
      setSort(urlSort);
    }
  }, [searchParams, setSort]);



  return (
    <div className='sort-controls'>

      <div className='sort-controls__info-box'>
        {/* result count */}
        <h4 className='sort-controls__h4'>
          <span className='sort-controls__span'>{filteredProducts?.length}</span> 
          <span> of {products?.length}</span>
          <span> result{products?.length > 1 && 's'} </span>
        </h4>

        {/* sort control */}
        <div className='sort-controls__select-container'>
          <span className='sort-controls__label'>Sort by</span>
          <FormUISelect 
            id={'sort'} 
            name={'sort'} 
            value={sort} 
            onChange={handleSortChange} 
            options={sortOptions}
          />
        </div>
      </div>

      {/* view control */}
      <div className='sort-controls__display-buttons'>
        <button 
          className={`sort-controls__btn ${(layout === 'grid') ? 'sort-controls__btn--active' : ''}`} 
          onClick={() =>setLayout('grid')}
        >
          <TfiLayoutGrid2 className='sort-controls__grid-icon' />
        </button>

        <button 
          className={`sort-controls__btn ${(layout === 'list') ? 'sort-controls__btn--active' : ''}`}
          onClick={() => setLayout('list')}
        >
          <TfiLayoutListThumb className='sort-controls__list-icon' />
        </button>
      </div>

    </div>
  )
}