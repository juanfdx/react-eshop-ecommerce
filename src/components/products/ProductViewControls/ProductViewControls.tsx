import './ProductViewControls.scss';
// import { useState } from 'react';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore, type SortType } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { TfiLayoutGrid2, TfiLayoutListThumb } from 'react-icons/tfi';
import { FormUISelect } from '../../form/FormUISelect/FormUISelect';
// DATA
import { sortOptions } from '../../../data/data-selectors';
import { useEffect } from 'react';

type ProductViewControlsProps = {
  products: Product[];
  filteredProducts: Product[];
}


export const ProductViewControls = ({ products, filteredProducts }: ProductViewControlsProps) => {
  
  const { layout, setLayout, sort, setSort } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams(); 


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as SortType);
    updateQuery(event.target.value);
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


    // Update category query param in URL
  const updateQuery = (selected: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (selected === 'newest') {
      newParams.delete('sort'); 
    } else {
      newParams.set('sort', selected);
    }
    setSearchParams(newParams);
  };



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