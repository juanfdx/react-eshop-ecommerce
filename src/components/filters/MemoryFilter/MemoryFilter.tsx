import './MemoryFilter.scss';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getMemoryCounts } from '../../../utils/filterUtils';
import { formatStorageSize } from '../../../utils/stringUtils';


type MemoryFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number;
}

export const MemoryFilter = ({ products, openIndexes, index }: MemoryFilterProps) => {

  const { memory, setMemory } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const ulRef = useRef<HTMLUListElement>(null);
  
  const uniqueMemories = useMemo(() => getMemoryCounts(products), [products]);


  // Sync memory from URL → store on load / URL change
  useEffect(() => {
    const urlMemory = searchParams.get('memory');

    if (!urlMemory) {
      setMemory(null); // Reset if not in URL
    } else {
      setMemory(urlMemory);
    }
  }, [searchParams, setMemory]);


  const handleMemory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (memory === value) {
      setMemory(null);
      updateQuery(null); // Remove from URL
    } else {
      setMemory(value);
      updateQuery(value); // Set in URL
    }
  };

  // Update the memory query param
  const updateQuery = (selected: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (!selected) {
      newParams.delete('memory');
    } else {
      newParams.set('memory', selected);
    }
    // Reset page on any filter change
    newParams.delete('page');
    
    setSearchParams(newParams);
  };



  return (
    <ul 
      ref={ulRef}
      className='memory-filter'
      style={(openIndexes.has(index)) ? { maxHeight: ulRef.current?.scrollHeight } : { maxHeight: 0 }}
    >
      {uniqueMemories?.map((m, index) => (
        <li key={index} className='memory-filter__li'>
          <div className='memory-filter__wrapper'>
            <input 
              id={`memory-${m.memory}`}
              className={`memory-filter__input-checkbox ${memory === m.memory ? 'memory-filter__input-checkbox--checked' : ''}`} 
              type="checkbox" 
              name="memory" 
              value={m.memory}
              checked={memory === m.memory}
              onChange={handleMemory}
            />

            <label htmlFor={`memory-${m.memory}`} className='memory-filter__label'>
              {formatStorageSize(m.memory)}
            </label>
          </div>

          <span className='memory-filter__count'>({m?.quantity})</span>

        </li>
      ))}
    </ul>
  )
}