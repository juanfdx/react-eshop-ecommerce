import './ProductCard.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
import { getFirstVariantUrl } from '../../../utils/productUtils';
import { getUniqueVariantColors } from '../../../utils/colorUtils';
import { truncateText } from '../../../utils/stringUtils';
// COMPONENTS
import { VariantColorButtons } from '../VariantColorButtons/VariantColorButtons';
import { RatingBadge } from '../../shared/RatingBadge/RatingBadge';


type ProductCardProps = {
  product: Product
  variant?: 'grid' | 'list'
}


export const ProductCard = ({ product, variant = 'grid' }: ProductCardProps) => {

  const firstVariant = product?.variations[0];
  const uniqueColors = getUniqueVariantColors(product);
  const showColorButtons = uniqueColors.length > 1;
  
  return (
    <li className={`product-card ${variant === 'list' ? 'product-card--list' : ''}`}>
      <Link 
        className={`product-card__link ${variant === 'list' ? 'product-card__link--list' : ''}`} 
        to={getFirstVariantUrl(product)}
      >
        <div className={`product-card__img-wrapper ${variant === 'list' ? 'product-card__img-wrapper--list' : ''}`}>

          <img 
            className='product-card__img' 
            src={firstVariant?.images[0]?.url} 
            alt={firstVariant?.name} 
          />
          <div className='product-card__overlay'></div>
          
        </div>
      </Link>

      <div className={`product-card__details ${variant === 'list' ? 'product-card__details--list' : ''}`}>
        {/* color buttons */}
        {showColorButtons && 
          <VariantColorButtons product={product} variant={variant} />
        }
        {/* title */}
        <Link 
          className={`product-card__title ${variant === 'list' ? 'product-card__title--list' : ''}`} 
          to={getFirstVariantUrl(product)}
        >         
          {firstVariant?.name}
        </Link>
        {/* description */}
        <p className={`product-card__description ${variant === 'list' ? 'product-card__description--list' : ''}`}>
          {truncateText(product?.description, 150)}
        </p>
        {/* rating */}
        {product?.reviews?.length > 0 &&
          <RatingBadge rating={product?.averageRating} reviews={product?.reviews?.length} small={true} />
        }    
        {/* price */} 
        <p className='product-card__price'>{formatPrice(firstVariant?.price)}</p>        
      </div>
    </li>
  )
}