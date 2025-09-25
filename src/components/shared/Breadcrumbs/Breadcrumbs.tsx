import './Breadcrumbs.scss';
import { Link } from 'react-router';
// COMPONENTS
import { Icon } from '../Icon/Icon';

type BreadcrumbsProps = {
  label?: string;
  href?: string;
}


export const Breadcrumbs = ({label, href}: BreadcrumbsProps) => {
  

  return (
    <section className='breadcrumbs' >
      <div className={`breadcrumbs__container`} >
        <Link to='/'>Home</Link>

        { label && 
          <div className='breadcrumbs__products'>
            <Icon type={'breadcrumbs'} className='breadcrumbs__icon' />
            <Link className={`breadcrumbs__link ${!href ? 'breadcrumbs__link--gray-text' : ''}`} to={`/${label}`}>{label}</Link>
          </div>
        }
        { href &&
          <div className='breadcrumbs__products'>
            <Icon type={'breadcrumbs'} className='breadcrumbs__icon' />
            <Link 
              className='breadcrumbs__name' 
              to={`/products?category=${href}`}
            >
              {href}
            </Link>
          </div>
        }
        
      </div>
    </section>
  )
}