// COMPONENTS
import { PageHero } from '../../components/shared/PageHero/PageHero';
// IMAGES
import pcHero from '../../assets/images/hero/apple_pc_hero.webp';
// COMPONENTS
import { ProductSection } from '../../components/products/ProductSection/ProductSection';


export const Products = () => {
  
  return (
    <>
      <PageHero title={'Shop'} backgroundImage={pcHero} label={'shop'} />
      <ProductSection />
    </>
  )
}