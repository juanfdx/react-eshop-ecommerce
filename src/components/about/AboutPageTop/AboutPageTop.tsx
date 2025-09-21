import './AboutPageTop.scss';
import type { About } from '../../../data/data-about';

type AboutPageTopProps = {
  about: About
}


export const AboutPageTop = ({ about }: AboutPageTopProps) => {
  
  return (
    <section className='about-page-top'>
      <div className='about-page-top__container'>

        {about?.title &&
          <h1 className='about-page-top__title'>{about?.title}</h1>
        }

        <div className='about-page-top__img-wrapper'>
          <img 
            className='about-page-top__img' 
            src={about?.image?.url} 
            alt={about?.image?.name}  
          />
        </div>

      </div>
    </section>
  )
}