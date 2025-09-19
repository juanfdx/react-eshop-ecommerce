import './VariantColorButtons.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { isWhiteSpectrum } from '../../../utils/colorUtils';
import { getTopColorVariants } from '../../../utils/productUtils';


type VariantColorButtonsProps = {
  product: Product,
}


export const VariantColorButtons = ({ product }: VariantColorButtonsProps) => {


  const topColorVariants = getTopColorVariants(product?.variations);
  
  
  return (
    <ul className='variant-color-buttons'>
      {topColorVariants?.map((variation, index) => (
        <li 
          key={variation._id} 
          className={`variant-color-buttons__li ${index === 0 ? 'variant-color-buttons__li--active' : ''}`}       
        >
          <Link 
            className={`variant-color-buttons__link ${isWhiteSpectrum(variation?.hexCode) ? 'variant-color-buttons__link--active' : ''}`} 
            to={`/product/${product?.slug}?variation=${variation?._id}`} 
            style={{ backgroundColor: variation?.hexCode }}
          ></Link>
          
        </li>
      ))}
    </ul>
  )
}