import './ProductCard.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
import { getFirstVariantUrl, getProductVariantUrl } from '../../../utils/productUtils';
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
  const { color, memory, size, min_price, max_price }  = useFilterStore();

  const uniqueColors = getUniqueVariantColors(product);
  const showColorButtons = uniqueColors.length > 1;

  // Try to find a matching variant based on selected color
  const matchingVariant = product.variations.find(v => {
    const variantColor = v?.color?.toLowerCase();
    const matchesColor = color ? variantColor === color.toLowerCase() : true;
    const matchesMemory = memory ? v.memory === memory : true;
    const matchesSize = size ? v.size === size : true;
    const matchesMinPrice = min_price !== null ? v.price >= min_price : true;
    const matchesMaxPrice = max_price !== null ? v.price <= max_price : true;

    return matchesColor && matchesMemory && matchesSize && matchesMinPrice && matchesMaxPrice;
  });
  
  // Fallback to first variant
  const displayedVariant = matchingVariant || product.variations[0];

  // Use dynamic URL if matched, otherwise default to first variant URL
  const productUrl = matchingVariant
    ? getProductVariantUrl(product.slug, matchingVariant)
    : getFirstVariantUrl(product);



  return (
    <li className={`product-card ${variant === 'list' ? 'product-card--list' : ''}`}>
      <Link 
        className={`product-card__link ${variant === 'list' ? 'product-card__link--list' : ''}`} 
        to={productUrl}
      >
        <div className={`product-card__img-wrapper ${variant === 'list' ? 'product-card__img-wrapper--list' : ''}`}>

          <img 
            className='product-card__img' 
            src={displayedVariant?.images[0]?.url} 
            alt={displayedVariant?.name} 
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
          to={productUrl}
        >         
          {displayedVariant?.name}
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
        <p className='product-card__price'>{formatPrice(displayedVariant?.price)}</p>        
      </div>
    </li>
  )
}