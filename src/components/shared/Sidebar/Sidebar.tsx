import './Sidebar.scss';
import { NavLink } from 'react-router';
// STORE
import { useUIStore } from '../../../stores/useUIStore';
// COMPONENTS
import { RxCross1 } from "react-icons/rx";



export const Sidebar = () => {

  const isOpen  = useUIStore((state) => state.isOpen('sidebar'));
  const closeUI = useUIStore((state) => state.closeUI);
  

  return (
    <ul className={`sidebar ${(isOpen) ? 'sidebar--active' : ''}`}>

      <button className='sidebar__close-button' onClick={closeUI} >
        <RxCross1 className='sidebar__close-icon'/>
      </button>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'/'} >home</NavLink>
      </li>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'products'} >products</NavLink>
      </li>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'about'} >about</NavLink>
      </li>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'contact'} >contact</NavLink>
      </li>

    </ul>
  )
}