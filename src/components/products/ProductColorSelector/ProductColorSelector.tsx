import './ProductColorSelector.scss';
// INTERFACES
import type { ProductVariation } from '../../../interfaces/product.interface';

type ProductColorSelectorProps = {
  colors: [string, string][];
  variant: ProductVariation;
};


export const ProductColorSelector = ({ colors, variant }: ProductColorSelectorProps) => {
  
  return (
    <div className='color-selector'>

      <p className='color-selector__color-label'>
        Color: <span className='color-selector__color-span'>{variant?.color}</span>
      </p>

      <ul className='color-selector__color-ul'>
        {colors?.map(([color, hex], i) => (

          <li 
            key={i} 
            className={`color-selector__color-li ${color === variant?.color ? 'color-selector__color-li--active' : ''}`}
            // onClick={()=>handleVariationChange(color, variant?.memory)}
          >
            <div className='color-selector__color-btn'> 
              <div 
                className='color-selector__color-circle' 
                style={{ backgroundColor: hex }}
              >
              </div>        
            </div>
          </li>

        ))}
      </ul>

    </div>
  )
}