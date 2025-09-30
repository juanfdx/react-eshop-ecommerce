import './ProductContainer.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductViewControls } from '../ProductViewControls/ProductViewControls';

type ProductContainerProps = {
  products: Product[]
}


export const ProductContainer = ({ products }: ProductContainerProps) => {
  
  const layout = 'grid';
  
  return (
    <div className='product-container'>

      <ProductViewControls products={products} />

      <>
        {products?.length <= 0 ? (
          <h5 className='products-container__h5'>
              No products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <p>Grid View</p>
        ) : (
          <p>List View</p>
        )}
      </>
    
    </div>
  )
}