import './ProductCard.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
import { getFirstVariantUrl } from '../../../utils/productUtils';
// COMPONENTS
import { VariantColorButtons } from '../VariantColorButtons/VariantColorButtons';
import { RatingBadge } from '../../shared/RatingBadge/RatingBadge';


type ProductCardProps = {
  product: Product
}


export const ProductCard = ({ product }: ProductCardProps) => {
  
  return (
    <li className='product-card'>
      <Link className='product-card__link' to={getFirstVariantUrl(product)}>
        <div className='product-card__img-wrapper'>

          <img 
            className='product-card__img' 
            src={product?.variations[0]?.images[0]?.url} 
            alt={product?.variations[0]?.name} 
          />

        </div>
      </Link>

      <div className='product-card__text-wrapper'>
        {/* color buttons */}
        {product?.variations?.length > 1 &&
          <VariantColorButtons product={product} />
        }
        <Link className='product-card__title' to={getFirstVariantUrl(product)}>
          {product?.variations[0]?.name}
        </Link>
        {product?.reviews?.length > 0 &&
          <RatingBadge rating={product?.averageRating} reviews={product?.reviews?.length} small={true} />
        }     
        <p className='product-card__price'>{formatPrice(product?.variations[0]?.price)}</p>        
      </div>
    </li>
  )
}