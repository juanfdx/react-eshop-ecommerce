import './ProductSizeSelector.scss';
// INTERFACES
import type { ProductVariation } from '../../../interfaces/product.interface';
// UTILS
import { formatInches } from '../../../utils/stringUtils';

type ProductSizeSelectorProps = {
  sizes: string[];
  variant: ProductVariation;
  handleVariantChange: (memory: string, size: string, color: string) => void
}


export const ProductSizeSelector = ({ sizes, variant, handleVariantChange }: ProductSizeSelectorProps) => {
  
  return (
    <div className='size-selector'>
      
      <p className='size-selector__label'>
        Size: <span className='memory-selector__color-span'>{formatInches(variant?.size)}</span>
      </p>

      <ul className='size-selector__color-ul'>
        {sizes?.map((size, i) => (
          <li 
            key={i}
            className={`size-selector__color-li ${size === variant?.size ? 'size-selector__color-li--active' : ''}`} 
          >
            <button
              type="button"
              className='size-selector__color-btn'
              onClick={() => handleVariantChange(variant?.memory, size, variant?.color)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}