import './ProductCard.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
import { getFirstVariantUrl } from '../../../utils/productUtils';
import { getUniqueColors } from '../../../utils/colorUtils';
// COMPONENTS
import { VariantColorButtons } from '../VariantColorButtons/VariantColorButtons';
import { RatingBadge } from '../../shared/RatingBadge/RatingBadge';


type ProductCardProps = {
  product: Product
}


export const ProductCard = ({ product }: ProductCardProps) => {

  const firstVariant = product?.variations[0];
  const uniqueColors = getUniqueColors(product);
  const showColorButtons = uniqueColors.length > 1;
  
  return (
    <li className='product-card'>
      <Link className='product-card__link' to={getFirstVariantUrl(product)}>
        <div className='product-card__img-wrapper'>

          <img 
            className='product-card__img' 
            src={firstVariant?.images[0]?.url} 
            alt={firstVariant?.name} 
          />

        </div>
      </Link>

      <div className='product-card__text-wrapper'>
        {/* color buttons */}
        {showColorButtons &&
          <VariantColorButtons product={product} />
        }
        <Link className='product-card__title' to={getFirstVariantUrl(product)}>
          {firstVariant?.name}
        </Link>
        {product?.reviews?.length > 0 &&
          <RatingBadge rating={product?.averageRating} reviews={product?.reviews?.length} small={true} />
        }     
        <p className='product-card__price'>{formatPrice(firstVariant?.price)}</p>        
      </div>
    </li>
  )
}