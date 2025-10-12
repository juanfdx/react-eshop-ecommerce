import { useLoaderData } from 'react-router'
// INTERFACES
import type { Product } from '../../interfaces/product.interface'
import type { Category } from '../../data/data-categories'
// COMPONENTS
import { HeroSlider } from '../../components/sliders/HeroSlider/HeroSlider'
import { CategorySlider } from '../../components/sliders/CategorySlider/CategorySlider'
import { FeaturedProducts } from '../../components/products/FeaturedProducts/FeaturedProducts'
import { StoreServices } from '../../components/storeServices/StoreServices/StoreServices'

type LoaderData = {
  products: Product[]
  categories: Category[]
}

export const Home = () => {

  const { products, categories } = useLoaderData() as LoaderData;

  
  return (
    <>
      <HeroSlider />
      <CategorySlider categories={categories} />
      <FeaturedProducts products={products} />
      <StoreServices />
    </>
  )
}