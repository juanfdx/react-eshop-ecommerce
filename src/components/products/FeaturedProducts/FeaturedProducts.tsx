import './FeaturedProducts.scss';
import { useMemo } from 'react';
// UTILS
import { getFeaturedProducts } from '../../../utils/productUtils';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
// DATA
import { products } from '../../../data/data-products';


export const FeaturedProducts = () => {

  const featuredProducts = useMemo(() => getFeaturedProducts(products), []);
  
  
  return (
    <section className='featured'>
      <div className='featured__container'>

        <Title title={'Featured Products'} />

        <ProductsGrid products={featuredProducts} variant={'featured'} />

      </div>
    </section>

  )
}