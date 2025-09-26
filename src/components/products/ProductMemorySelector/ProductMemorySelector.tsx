import './ProductMemorySelector.scss';
// INTERFACES
import type { ProductVariation } from '../../../interfaces/product.interface';

type ProductMemorySelectorProps = {
  memories: string[];
  variant: ProductVariation;
  handleVariantChange: (color: string, memory: string) => void
}


export const ProductMemorySelector = ({ memories, variant, handleVariantChange }: ProductMemorySelectorProps) => {
  
  return (
    <div className='memory-selector'>
      
      <p className='memory-selector__label'>
        Memory: <span className='memory-selector__color-span'>{variant?.memory}</span>
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
              onClick={() => handleVariantChange(memory, variant?.color)}
            >
              {memory}
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}