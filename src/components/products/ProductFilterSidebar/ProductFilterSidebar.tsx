import './ProductFilterSidebar.scss';
import { useEffect, useState } from 'react';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useUIStore } from '../../../stores/useUIStore';
// UTILS
import { useWindowSize } from '../../../hooks/useWindowSize';
// COMPONENTS
import { RxCross1 } from 'react-icons/rx';
import { RiEqualizerLine } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa6';
// DATA
import { filters } from '../../../data/data-filters';
import { CategoryFilter } from '../../filters/CategoryFilter/CategoryFilter';


type ProductFilterSidebarProps = {
  products: Product[];
}


export const ProductFilterSidebar = ({ products }: ProductFilterSidebarProps) => {
  console.log(products);
  
  const isOpen = useUIStore((state) => state.isOpen('product_filter'));
  const openUI = useUIStore((state) => state.openUI);
  const closeUI = useUIStore((state) => state.closeUI);
  
  const [transition, setTransition] = useState(false);
  const {width} = useWindowSize();

  useEffect(() => {
    setTransition(false);
    closeUI();
  }, [width, closeUI]);


  const handlePosition = (index: number) => {
    console.log(index);
  }

  const handleFilter = () => {
    setTransition(true);
    if (isOpen) {closeUI()}
    else {openUI('product_filter')}
  };


  
  return (
    <aside className={`product-filter ${isOpen ? 'product-filter--active' : ''} ${transition ? 'product-filter--transition' : ''}`}>
      <div className='product-filter__container'>
        <ul className='product-filter__ul'>

        {/* CLOSE BUTTON */}
        <button className='product-filter__close-btn' onClick={()=> handleFilter()}>
          <RxCross1 className='product-filter__close-icon'/>
        </button>

        {/* FILTER BUTTON */}
        <button className='product-filter__filter-btn' onClick={()=> handleFilter()}>
          <RiEqualizerLine className='product-filter__filter-icon' />
        </button>

          {/* FILTERS LIST */}
          {filters.map((filter, index) => (
            <li key={index} className='product-filter__li'>

              <h4 className='product-filter__h4' onClick={()=>handlePosition(index)} >
                <FaAngleDown className={`product-filter__arrow`} />
                {filter}
              </h4>

              {filter === 'categories' && (           
                <CategoryFilter products={products}  />
              )}
            </li>
          ))}

        </ul>
      </div>
    </aside>
  )
}