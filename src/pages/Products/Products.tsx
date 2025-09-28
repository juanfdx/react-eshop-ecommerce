// COMPONENTS
import { PageHero } from '../../components/shared/PageHero/PageHero';
// IMAGES
import pcHero from '../../assets/images/hero/apple_pc_hero.webp';

export const Products = () => {
  
  return (
    <>
      <PageHero 
        title={'Shop'} 
        backgroundImage={pcHero} 
        ctaLabel={'View All'} 
        ctaHref={'/products'}
      />
    </>
  )
}