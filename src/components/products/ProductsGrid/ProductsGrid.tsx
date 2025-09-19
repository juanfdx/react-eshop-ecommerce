import './ProductsGrid.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductCard } from '../ProductCard/ProductCard';

type ProductsGridProps = {
  products: Product[]
}


export const ProductsGrid = ({ products }: ProductsGridProps) => {

  
  return (
    <ul className='products-grid'>
      {products?.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  )
}