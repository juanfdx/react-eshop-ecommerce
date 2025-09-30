import './ProductViewControls.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { TfiLayoutGrid2, TfiLayoutListThumb } from 'react-icons/tfi';

type ProductViewControlsProps = {
  products: Product[]
}


export const ProductViewControls = ({ products }: ProductViewControlsProps) => {
  
  const layout = 'grid';

  return (
    <div className='sort-controls'>

      <div className='sort-controls__info-box'>
        {/* result count */}
        <h4 className='sort-controls__h4'>
          <span className='sort-controls__span'>100</span> 
          <span> of {products?.length}</span>
          <span> result{products?.length > 1 && 's'} </span>
        </h4>

        {/* sort control */}
        <div className='sort-controls__select-container'>
          {/* <FormSelectDropDown label={'sort'} handleSortChange={handleSortChange} /> */}
        </div>
      </div>

      {/* view control */}
      <div className='sort-controls__display-buttons'>
        <button 
          className={`sort-controls__btn ${(layout === 'grid') ? 'sort-controls__btn--active' : ''}`} 
          // onClick={() =>dispatch(setLayout('grid'))}
        >
          <TfiLayoutGrid2 className='sort-controls__grid-icon' />
        </button>

        <button 
          className={`sort-controls__btn ${(layout === 'list') ? 'sort-controls__btn--active' : ''}`}
          // onClick={() =>dispatch(setLayout('list'))}
        >
          <TfiLayoutListThumb className='sort-controls__list-icon' />
        </button>
      </div>

    </div>
  )
}