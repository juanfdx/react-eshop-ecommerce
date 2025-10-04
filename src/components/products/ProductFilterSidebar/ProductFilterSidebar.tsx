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
import { ActiveFilters } from '../../filters/ActiveFilters/ActiveFilters';
import { CategoryFilter } from '../../filters/CategoryFilter/CategoryFilter';
import { RatingFilter } from '../../filters/RatingFilter/RatingFilter';
import { PriceFilter } from '../../filters/PriceFilter/PriceFilter';
import { MemoryFilter } from '../../filters/MemoryFilter/MemoryFilter';
import { SizeFilter } from '../../filters/SizeFilter/SizeFilter';
import { ColorFilter } from '../../filters/ColorFilter/ColorFilter';
// DATA
import { filters } from '../../../data/data-filters';


type ProductFilterSidebarProps = {
  products: Product[];
}


export const ProductFilterSidebar = ({ products }: ProductFilterSidebarProps) => {
  
  const isOpen = useUIStore((state) => state.isOpen('product_filter'));
  const openUI = useUIStore((state) => state.openUI);
  const closeUI = useUIStore((state) => state.closeUI);
  
  const {width} = useWindowSize();
  
  const [openFilters, setOpenFilters] = useState<Set<number>>(new Set(filters.map((_, idx) => idx))); // all open on load
  const [transition, setTransition] = useState<boolean>(false);


  useEffect(() => {
    setTransition(false);
    closeUI();
  }, [width, closeUI]);


  const handleOpenFilter = (index: number) => {
    setOpenFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) { newSet.delete(index);} 
      else {newSet.add(index);}
      return newSet;
    });
  };

  const handleToggleSidebarFilter = () => {
    setTransition(true);
    if (isOpen) {closeUI()}
    else {openUI('product_filter')}
  };


  
  return (
    <aside className={`product-filter ${isOpen ? 'product-filter--active' : ''} ${transition ? 'product-filter--transition' : ''}`}>
      <div className='product-filter__container'>

        {/* CLOSE BUTTON */}
        <button className='product-filter__close-btn' onClick={()=> handleToggleSidebarFilter()}>
          <RxCross1 className='product-filter__close-icon'/>
        </button>

        {/* TOGGLE SIDEBAR BUTTON */}
        <button className='product-filter__filter-btn' onClick={()=> handleToggleSidebarFilter()}>
          <RiEqualizerLine className='product-filter__filter-icon' />
        </button>

        {/* FILTERS LIST */}
        <ul className='product-filter__ul'>

          <ActiveFilters />

          {filters.map((filter, index) => (
            <li key={index} className='product-filter__li'>

              <h4 className='product-filter__h4' onClick={()=>handleOpenFilter(index)} >
                <FaAngleDown className={`product-filter__arrow ${openFilters.has(index) ? 'product-filter__arrow--active' : ''}`} />
                {filter}
              </h4>

              {filter === 'category' && (           
                <CategoryFilter products={products} openIndexes={openFilters} index={index} />
              )}

              {filter === 'rating' && (           
                <RatingFilter openIndexes={openFilters} index={index} />
              )}

              {filter === 'price' && (           
                <PriceFilter products={products} openIndexes={openFilters} index={index} />
              )}

              {filter === 'memory' && (           
                <MemoryFilter products={products} openIndexes={openFilters} index={index} />
              )}

              {filter === 'size' && (           
                <SizeFilter products={products} openIndexes={openFilters} index={index} />
              )}

              {filter === 'color' && (           
                <ColorFilter products={products} openIndexes={openFilters} index={index} />
              )}

            </li>
          ))}

        </ul>
      </div>
    </aside>
  )
}