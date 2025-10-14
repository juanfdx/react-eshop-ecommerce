import './FeaturedProducts.scss';
import { useMemo } from 'react';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { getFeaturedProducts } from '../../../utils/productUtils';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';

type FeaturedProductsProps = {
  products: Product[]
  isLoading?: boolean
};


export const FeaturedProducts = ({ products, isLoading }: FeaturedProductsProps) => {

  const featuredProducts = useMemo(() => getFeaturedProducts(products), [ products ]);
  
  
  return (
    <section className='featured'>
      <div className='featured__container'>

        <Title title={'Featured Products'} />

        <ProductsGrid products={featuredProducts} variant={'featured'} isLoading={isLoading} />

      </div>
    </section>

  )
}