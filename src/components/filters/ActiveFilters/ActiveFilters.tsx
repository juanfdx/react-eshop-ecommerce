import './ActiveFilters.scss';
import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
// STORES
import { useFilterStore } from '../../../stores/useFilterStore';
// COMPONENTS
import { FaAngleDown } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { getFilterLabels } from '../../../utils/filterUtils';



export const ActiveFilters = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(true);
  const ulRef = useRef<HTMLUListElement>(null);
  const {
  setCategory,
  setMinPrice,
  setMaxPrice,
  setColor,
  setMemory,
  setSize,
  setRating,
  resetFilters
} = useFilterStore();

  // create an array of active filters with params
  const activeFilters = Array.from(searchParams.entries())
      .filter(([key]) => key !== 'page' && key !== 'sort')
      .map(([key, value]) => ({ key, value }))

      
  const resetStoreValue = (param: string) => {
    switch (param) {
      case 'category':
        setCategory('all');
        break;
      case 'rating':
        setRating(0);
        break;
      case 'min_price':
        setMinPrice(null);
        break;
      case 'max_price':
        setMaxPrice(null);
        break;
      case 'memory':
        setMemory(null);
        break;
      case 'size':
        setSize(null);
        break;
      case 'color':
        setColor(null);
        break;
    }
  };
  
      
  const handleDelete = (param: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(param);
    setSearchParams(newParams);
    resetStoreValue(param);
  };
  
  const clearAllFilters = () => {
    resetFilters();
    setSearchParams('');
  };


  // if no active filters, don't render
  if (activeFilters.length === 0) return null;
  


  return (
    <li className='active-filters'>

      <h4 className='active-filters__h4'  onClick={() => setActive(prev => !prev)}>
        <FaAngleDown className={`active-filters__arrow ${active ? 'active-filters__arrow--active' : ''}`} />
        Active Filters
      </h4>

      <ul
        ref={ulRef} 
        className={`active-filters__ul ${active ? 'active-filters__ul--active' : ''}`}
      >
        {activeFilters.map(param => (
          <li key={param?.key} className='active-filters__li'>
            <button 
              className='active-filters__close-btn' type='button'
              onClick={() => handleDelete(param?.key)}
            >
              <span className='active-filters__value'>
                {getFilterLabels(param)}
              </span>
              <IoClose className='active-filters__icon' />
            </button>
          </li>
        ))}

        <li className='active-filters__li'>
          <button className='active-filters__reset' onClick={clearAllFilters}>
            reset
          </button>
        </li>

      </ul>
    </li>
  )
}