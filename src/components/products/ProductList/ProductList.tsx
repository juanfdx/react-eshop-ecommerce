import './ProductList.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';

type ProductListProps = {
  products: Product[];
  isLoading?: boolean;
}


export const ProductList = ({ products, isLoading }: ProductListProps) => {
  
  
  return (
    <ul className='product-list'>
      {products?.map(product => (
        isLoading ? (
          <ProductCardSkeleton key={product._id} variant='list' />
        ) : (
          <ProductCard key={product._id} product={product} variant='list' />
        )
      ))}
    </ul>
  )
}