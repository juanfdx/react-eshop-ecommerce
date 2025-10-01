import './ProductsGrid.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductCard } from '../ProductCard/ProductCard';

type ProductsGridProps = {
  products: Product[];
  variant?: 'default' | 'featured';
}


export const ProductsGrid = ({ products, variant = "default" }: ProductsGridProps) => {

  
  return (
    <ul className={`products-grid ${variant !== 'default' ? 'products-grid--featured' : ''}`}>
      {products?.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  )
}