import './ProductColorSelector.scss';
// INTERFACES
import type { ProductVariation } from '../../../interfaces/product.interface';

type ProductColorSelectorProps = {
  colors: [string, string][];
  variant: ProductVariation;
  handleVariantChange: (memory: string, size: string, color: string) => void
};


export const ProductColorSelector = ({ colors, variant, handleVariantChange }: ProductColorSelectorProps) => {
  
  return (
    <div className='color-selector'>

      <p className='color-selector__color-label'>
        Color: <span className='color-selector__color-span'>{variant?.color}</span>
      </p>

      <ul className='color-selector__color-ul'>
        {colors?.map(([color, hexCode], i) => (

          <li 
            key={i} 
            className={`color-selector__color-li ${color === variant?.color ? 'color-selector__color-li--active' : ''}`}
            onClick={()=>handleVariantChange(variant?.memory, variant?.size, color)}
          >
            <div className='color-selector__color-btn'> 
              <div 
                className='color-selector__color-circle' 
                style={{ backgroundColor: hexCode }}
              >
              </div>        
            </div>
          </li>

        ))}
      </ul>

    </div>
  )
}