import './VariantColorButtons.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { isWhiteSpectrum } from '../../../utils/colorUtils';
import { getProductVariantUrl, getTopColorVariants } from '../../../utils/productUtils';


type VariantColorButtonsProps = {
  product: Product,
  variant?: 'grid' | 'list'
}


export const VariantColorButtons = ({ product, variant = 'grid' }: VariantColorButtonsProps) => {


  const topColorVariants = getTopColorVariants(product?.variations);
  
  
  return (
    <ul className={`variant-color-buttons ${variant === 'list' ? 'variant-color-buttons--list' : ''}`}>
      {topColorVariants?.map((variant, index) => (
        <li 
          key={variant._id} 
          className={`variant-color-buttons__li ${index === 0 ? 'variant-color-buttons__li--active' : ''}`}       
        >
          <Link 
            className={`variant-color-buttons__link ${isWhiteSpectrum(variant?.hexCode) ? 'variant-color-buttons__link--active' : ''}`} 
            to={getProductVariantUrl(product?.slug, variant)} 
            style={{ backgroundColor: variant?.hexCode }}
          ></Link>
          
        </li>
      ))}
    </ul>
  )
}