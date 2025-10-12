import './ProductContainer.scss';
import { useNavigation } from 'react-router';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductViewControls } from '../ProductViewControls/ProductViewControls';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
import { ProductList } from '../ProductList/ProductList';
import { Pagination } from '../../shared/Pagination/Pagination';
import { PaginationSelect } from '../../shared/PaginationSelect/PaginationSelect';

type ProductContainerProps = {
  products: Product[];
    filteredProducts: {
    products: Product[]
    total: number
    currentPage: number
    numOfPages: number
    limit: number
  };
}


export const ProductContainer = ({ products, filteredProducts }: ProductContainerProps) => {
  
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  const layout = useFilterStore((state) => state.layout)
  const { products: paginatedProducts, total, currentPage, numOfPages, limit } = filteredProducts;

  
  
  return (
    <div className='product-container'>

      <ProductViewControls products={products} filteredProducts={paginatedProducts} />

      <>
        {paginatedProducts?.length <= 0 ? (
          <h5 className='product-container__h5'>
              No products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={paginatedProducts} isLoading={isNavigating} />
        ) : (
          <ProductList products={paginatedProducts} isLoading={isNavigating} />
        )}
      </>
      
      {/* for large screens only */}
      <Pagination
        currentPage={currentPage}
        numOfPages={numOfPages}
        limit={limit}
        total={total}
        small
        marginTop='80px'
      />

      {/* for small screens only */}
      <PaginationSelect
        currentPage={currentPage}
        numOfPages={numOfPages}
        limit={limit}
        total={total}
        small
        marginTop='80px'
      />
    
    </div>
  )
}