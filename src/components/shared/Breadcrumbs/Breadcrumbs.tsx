import './Breadcrumbs.scss';
import { Link } from 'react-router';
// COMPONENTS
import { Icon } from '../Icon/Icon';

type BreadcrumbsProps = {
  name: string;
  product: string;
}


export const Breadcrumbs = ({name, product}: BreadcrumbsProps) => {
  

  return (
    <section className='breadcrumbs' >
      <h3 className={`breadcrumbs__h3`} >
        <Link to='/'>Home</Link>

        { product && 
          <div className='breadcrumbs__products'>
            <Icon type={'breadcrumbs'} className='breadcrumbs__icon' />
            <Link to='/products'>Products</Link> 
          </div>
        }
        { name &&
          <>
            <Icon type={'breadcrumbs'} className='breadcrumbs__icon' />
            <span className='breadcrumbs__title'>{name}</span>
          </>
        }
        
      </h3>
    </section>
  )
}