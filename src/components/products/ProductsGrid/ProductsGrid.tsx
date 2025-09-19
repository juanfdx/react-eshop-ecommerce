import './ProductsGrid.scss';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
import { VariantColorButtons } from '../VariantColorButtons/VariantColorButtons';

type ProductsGridProps = {
  products: Product[]
}


export const ProductsGrid = ({ products }: ProductsGridProps) => {

  
  
  return (
    <ul className='products-grid'>
      {products?.map(product => (
        <li key={product._id} className='products-grid__card'>
          <Link 
            className='products-grid__card-link' 
            to={`/product/${product?.slug}?variation=${product?.variations[0]?._id}`} 
          >
            <div className='products-grid__img-wrapper'>

              <img 
                className='products-grid__img' 
                src={product?.variations[0]?.images[0]?.url} 
                alt={product?.variations[0]?.name} 
              />

            </div>
          </Link>

          <div className='products-grid__text-wrapper'>
            <VariantColorButtons product={product} />
            <Link 
              className='products-grid__card-h3-link' 
              to={`/product/${product?.slug}?variation=${product?.variations[0]?._id}`}
            >
              {product?.variations[0]?.name}
            </Link>
            <p className='products-grid__card-p'>{formatPrice(product?.variations[0]?.price)}</p>        
          </div>
        </li>
        ))}
    </ul>
  )
}