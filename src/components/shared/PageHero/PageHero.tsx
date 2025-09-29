import './PageHero.scss';
// COMPONENTS
import { Title } from '../Title/Title';
import { HeroBreadCrumbs } from '../HeroBreadCrumbs/HeroBreadCrumbs';


type PageHeroProps = {
  title: string;
  backgroundImage: string;
  label?: string;
};


export const PageHero = ({title, backgroundImage, label}: PageHeroProps) => {
  
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
            {label && (
              <HeroBreadCrumbs label={label}  />
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}