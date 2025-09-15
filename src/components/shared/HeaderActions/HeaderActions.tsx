import './HeaderActions.scss';
import { Link } from 'react-router';
// COMPONENTS
import { Icon } from '../Icon/Icon';


export const HeaderActions = () => {

  const isUser = false;
  
  return (
    <ul className='header-actions header-actions--links'>
      <li className='header-actions__li'>
        { !isUser ? (
          <Link to={'login'}>
            <Icon type={'user'} className='header-actions__user-icon' />
          </Link>
        ) : (
          <button>
            <img src="" alt="user avatar" />
          </button>
        )}
      </li>

      <li className='header-actions__li'>
        <Link to={'/'}>
          <Icon type={'magnifier'} className='header-actions__magnifier-icon' />
        </Link>
      </li>

      <li className='header-actions__li'>
        <Link to={'/cart'}>
          <span className='header-actions__item-count'>0</span>
          <Icon type={'cart'} className='header-actions__cart-icon' />
        </Link>
      </li>
    </ul>
  )
}