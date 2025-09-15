import './Header.scss';
import { Link } from 'react-router';
// COMPONENTS
import { Navbar } from '../Navbar/Navbar';
import { Icon } from '../Icon/Icon';
import { HeaderActions } from '../HeaderActions/HeaderActions';


export const Header = () => {

  return (
    <header className='header'>
      <div className='header__container'>

        {/* menu button */}
        <button className='header__menu-btn' >
          <Icon type={'menu'} className='header__menu-icon' />
        </button>

        {/* LOGO */}
        <Link className='header__logo' to={'/'}>
          <h1 className='header__h1'>e-SHOP</h1>
        </Link>

        {/* NAVBAR */}
        <Navbar />

        {/* HEADER ACTIONS */}
        <HeaderActions />

      </div>
    </header>
  )
}