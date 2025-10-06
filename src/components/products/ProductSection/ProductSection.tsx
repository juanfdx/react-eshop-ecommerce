import './ProductSection.scss';
import { useLoaderData } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// COMPONENTS
import { ProductFilterSidebar } from '../ProductFilterSidebar/ProductFilterSidebar';
import { ProductContainer } from '../ProductContainer/ProductContainer';

type LoaderData = {
  allProducts: Product[];
  filteredProducts: Product[];
};


export const ProductSection = () => {

  const { allProducts, filteredProducts } = useLoaderData() as LoaderData;
  

  return (
    <section className='product-section'>
      <div className='product-section__container'>
        
        <ProductFilterSidebar products={allProducts}  />
       
        <ProductContainer products={allProducts} filteredProducts={filteredProducts} />
        
      </div>
    </section>
  )
}