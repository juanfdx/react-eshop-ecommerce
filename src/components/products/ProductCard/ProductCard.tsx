import './ProductCard.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
// COMPONENTS
import { VariantColorButtons } from '../VariantColorButtons/VariantColorButtons';


type ProductCardProps = {
  product: Product
}


export const ProductCard = ({ product }: ProductCardProps) => {
  
  return (
    <li key={product._id} className='product-card'>
      <Link 
        className='product-card__link' 
        to={`/product/${product?.slug}?variantId=${product?.variations[0]?._id}`} 
      >
        <div className='product-card__img-wrapper'>

          <img 
            className='product-card__img' 
            src={product?.variations[0]?.images[0]?.url} 
            alt={product?.variations[0]?.name} 
          />

        </div>
      </Link>

      <div className='product-card__text-wrapper'>
        <VariantColorButtons product={product} />
        
        <Link 
          className='product-card__title' 
          to={`/product/${product?.slug}?variantId=${product?.variations[0]?._id}`}
        >
          {product?.variations[0]?.name}
        </Link>
        
        <p className='product-card__price'>{formatPrice(product?.variations[0]?.price)}</p>        
      </div>
    </li>
  )
}