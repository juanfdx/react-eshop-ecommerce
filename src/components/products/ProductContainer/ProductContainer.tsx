import './ProductContainer.scss';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductViewControls } from '../ProductViewControls/ProductViewControls';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
import { ProductList } from '../ProductList/ProductList';

type ProductContainerProps = {
  products: Product[];
  filteredProducts: Product[];
}


export const ProductContainer = ({ products, filteredProducts }: ProductContainerProps) => {
  
  const layout = useFilterStore((state) => state.layout)
  
  
  return (
    <div className='product-container'>

      <ProductViewControls products={products} filteredProducts={filteredProducts} />

      <>
        {filteredProducts?.length <= 0 ? (
          <h5 className='product-container__h5'>
              No products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={filteredProducts} />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </>
    
    </div>
  )
}