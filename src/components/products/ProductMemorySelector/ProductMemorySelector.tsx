import './ProductMemorySelector.scss';
// INTERFACES
import type { ProductVariation } from '../../../interfaces/product.interface';
// UTILS
import { formatMemory } from '../../../utils/stringUtils';

type ProductMemorySelectorProps = {
  memories: string[];
  variant: ProductVariation;
  handleVariantChange: (memory: string, size: string, color: string) => void
}


export const ProductMemorySelector = ({ memories, variant, handleVariantChange }: ProductMemorySelectorProps) => {
  
  return (
    <div className='memory-selector'>
      
      <p className='memory-selector__label'>
        Memory: <span className='memory-selector__color-span'>{formatMemory(variant?.memory)}</span>
      </p>

      <ul className='memory-selector__color-ul'>
        {memories?.map((memory, i) => (
          <li 
            key={i}
            className={`memory-selector__color-li ${memory === variant?.memory ? 'memory-selector__color-li--active' : ''}`} 
          >
            <button
              type="button"
              className='memory-selector__color-btn'
              onClick={() => handleVariantChange(memory, variant?.size, variant?.color)}
            >
              {memory}
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}