import './RootLayout.scss';
import { Outlet } from 'react-router';
// HOOKS
import { useLoadingStates } from '../../hooks/useLoadingStates';
// COMPONENTS
import { ScrollToTop } from '../../components/shared/ScrollToTop/ScrollToTop';
import { Header } from '../../components/shared/Header/Header';
import { Footer } from '../../components/shared/Footer/Footer';
import { Sidebar } from '../../components/shared/Sidebar/Sidebar';
import { Overlay } from '../../components/shared/Overlay/Overlay';
import { Loader } from '../../components/loaders/Loader/Loader';


export const RootLayout = () => {

  const { isPageTransition } = useLoadingStates();

  
  return (
    <div className='root-layout'>
      
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Overlay />

      <main className='root-layout__main'>
        {isPageTransition ? <Loader /> : <Outlet />}
      </main>

      <Footer />
    </div>
    
  )
}