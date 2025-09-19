import './FeaturedProducts.scss';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
// DATA
import { products } from '../../../data/data-products';


export const FeaturedProducts = () => {
  
  return (
    <section className='featured'>
      <div className='featured__container'>

        <Title title={'Featured Products'} />

        <ProductsGrid products={products} />

      </div>
    </section>

  )
}