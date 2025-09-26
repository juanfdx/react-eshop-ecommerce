import './PageHero.scss';
// COMPONENTS
import { Title } from '../Title/Title';


type PageHeroProps = {
  title: string;
  backgroundImage: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const PageHero = ({title, backgroundImage, ctaLabel, ctaHref}: PageHeroProps) => {
  
  return (
    <section className="page-hero">
      <div 
        className='page-hero__container'>
        <div 
          className='page-hero__background'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >

          <div className="page-hero__overlay"></div>

          <div className="page-hero__content">
            <Title title={title} />
            {ctaLabel && ctaHref && (
              <h1><a href={ctaHref}>{ctaLabel}</a></h1>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}