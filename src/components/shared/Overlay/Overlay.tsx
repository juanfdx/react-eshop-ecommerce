import './Overlay.scss';
import { useUIStore } from '../../../stores/useUIStore';


export const Overlay = () => {

  const isSidebarOpen = useUIStore((state) => state.isOpen('sidebar'));
  const isProductFilterOpen = useUIStore((state) => state.isOpen('product_filter'));
  const closeUI = useUIStore((state) => state.closeUI);
  

  return (
    <div 
      className={`overlay ${(isSidebarOpen || isProductFilterOpen) ? 'overlay--active' : ''}`}
      onClick={closeUI}
    > 
    </div>
  )
}