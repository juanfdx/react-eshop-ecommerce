import './ProductSection.scss';
// DATA
import { products } from '../../../data/data-products';
// COMPONENTS
import { ProductContainer } from '../ProductContainer/ProductContainer';
import { ProductFilterSidebar } from '../ProductFilterSidebar/ProductFilterSidebar';


export const ProductSection = () => {
  
  return (
    <section className='product-section'>
      <div className='product-section__container'>
        
        <ProductFilterSidebar products={products} />
       
        <ProductContainer products={products} />
        
      </div>
    </section>
  )
}