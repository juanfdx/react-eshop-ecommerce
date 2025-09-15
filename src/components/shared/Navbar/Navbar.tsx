import './Navbar.scss';
import { NavLink } from 'react-router';
// DATA
import { navLinks } from '../../../data/data-navlinks';


export const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <ul className='navbar__ul navbar__ul--nav-links'>
        {navLinks?.map(item => (
          <li className='navbar__li' key={item.id}>
            <NavLink className='navbar__nav-link' to={item.path} >{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}