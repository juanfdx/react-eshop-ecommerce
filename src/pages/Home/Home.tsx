// COMPONENTS
import { HeroSlider } from '../../components/sliders/HeroSlider/HeroSlider'
import { CategorySlider } from '../../components/sliders/CategorySlider/CategorySlider'
import { StoreServices } from '../../components/storeServices/StoreServices/StoreServices'


export const Home = () => {
  
  return (
    <>
      <HeroSlider />
      <CategorySlider />
      <StoreServices />
    </>
  )
}