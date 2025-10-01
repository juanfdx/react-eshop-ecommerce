import './ProductList.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
import { ProductCard } from '../ProductCard/ProductCard';

type ProductListProps = {
  products: Product[]
}


export const ProductList = ({ products }: ProductListProps) => {
  
  return (
    <ul className='product-list'>
      {products?.map(product => (
        <ProductCard key={product._id} product={product} variant='list' />
      ))}
    </ul>
  )
}