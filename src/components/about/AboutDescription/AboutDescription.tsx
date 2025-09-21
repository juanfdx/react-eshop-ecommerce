import './AboutDescription.scss';
// INTERFACES
import type { About } from '../../../data/data-about';


type AboutDescriptionProps = {
  about: About
}


export const AboutDescription = ({ about }: AboutDescriptionProps) => {
  
  return (
    <section className='about-description'>
      <div className='about-description__container'>
        <ul className='about-description__ul'>

          {about?.description?.map(item => 
            
            <li key={item?._id} className='about-description__li'>
              <h3 className="about-description__title">{item?.title}</h3>
              <p className='about-description__description'>{item?.text}</p>
            </li>
          
          )}

        </ul>    
      </div>
    </section>
  )
}