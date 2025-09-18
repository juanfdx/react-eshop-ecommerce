// COMPONENTS
import { HeroSlider } from '../../components/sliders/HeroSlider/HeroSlider'
import { CategorySlider } from '../../components/sliders/CategorySlider/CategorySlider'
import { FeaturedProducts } from '../../components/products/FeaturedProducts/FeaturedProducts'
import { StoreServices } from '../../components/storeServices/StoreServices/StoreServices'


export const Home = () => {
  
  return (
    <>
      <HeroSlider />
      <CategorySlider />
      <FeaturedProducts />
      <StoreServices />
    </>
  )
}