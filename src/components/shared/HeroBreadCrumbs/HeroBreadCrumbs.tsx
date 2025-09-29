import './HeroBreadCrumbs.scss';
import { Link } from 'react-router';

type HeroBreadcrumbsProps = {
  label?: string;
}


export const HeroBreadCrumbs = ({ label }: HeroBreadcrumbsProps) => {
  
  return (
    <section className='hero-breadcrumbs'>
      <div className={`hero-breadcrumbs__container`} >
        <Link className='hero-breadcrumbs__link' to='/'>Home</Link>

        { label && 
          <div className='hero-breadcrumbs__products'>
            <span className='hero-breadcrumbs__slash'>/</span>
            <span className='hero-breadcrumbs__label'>{label}</span>
          </div>
        }

      </div>
    </section>
  )
}