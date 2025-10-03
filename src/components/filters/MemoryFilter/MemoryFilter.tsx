import './MemoryFilter.scss';
import { useMemo, useRef } from 'react';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { getMemoryCounts } from '../../../utils/filterUtils';
import { formatMemory } from '../../../utils/stringUtils';


type MemoryFilterProps = {
  products: Product[];
  openIndexes: Set<number>;
  index: number;
}

export const MemoryFilter = ({ products, openIndexes, index }: MemoryFilterProps) => {

  const { memory, setMemory } = useFilterStore();
  const ulRef = useRef<HTMLUListElement>(null);
  
  const uniqueMemories = useMemo(() => getMemoryCounts(products), [products]);


  const handleMemory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMemory(memory === value ? null : value);
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
              {formatMemory(m.memory)}
            </label>
          </div>

          <span className='memory-filter__count'>({m?.quantity})</span>

        </li>
      ))}
    </ul>
  )
}