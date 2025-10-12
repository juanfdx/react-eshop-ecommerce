import './ProductsGrid.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';

type ProductsGridProps = {
  products: Product[];
  variant?: 'default' | 'featured';
  isLoading?: boolean;
}


export const ProductsGrid = ({ products, variant = "default", isLoading }: ProductsGridProps) => {

  // already checked if there are products in ProductContainer
  return (
    <ul className={`products-grid ${variant !== 'default' ? 'products-grid--featured' : ''}`}>
      {products?.map(product => (
        isLoading ? (
          <ProductCardSkeleton key={product._id} />
        ) : (
          <ProductCard key={product._id} product={product} />
        )
      ))}
    </ul>
  )
}