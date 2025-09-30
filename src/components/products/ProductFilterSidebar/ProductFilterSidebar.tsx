import './ProductFilterSidebar.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';

type ProductFilterSidebarProps = {
  products: Product[];
}


export const ProductFilterSidebar = ({ products }: ProductFilterSidebarProps) => {
  console.log(products);
  
  return (
    <div className='product-filter-sidebar'>
      <div className='product-filter-sidebar__container'>

        ProductFiltersSidebar
      </div>
    </div>
  )
}