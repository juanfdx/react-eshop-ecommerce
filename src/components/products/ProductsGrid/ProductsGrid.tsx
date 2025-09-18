import './ProductsGrid.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';

type ProductsGridProps = {
  products: Product[]
}


export const ProductsGrid = ({ products }: ProductsGridProps) => {
  
  return (
    <ul className='products-grid'>
      {products?.map(product => (
        <li key={product._id} className='products-grid__li'>
          <img src="" alt="" />
        </li>
      ))}
    </ul>
  )
}