import './Overlay.scss';
import { useUIStore } from '../../../stores/useUIStore';


export const Overlay = () => {

  const isSidebarOpen = useUIStore((state) => state.isOpen('sidebar'));
  const closeUI = useUIStore((state) => state.closeUI);
  

  return (
    <div 
      className={`overlay ${(isSidebarOpen) ? 'overlay--active' : ''}`}
      onClick={closeUI}
    > 
    </div>
  )
}