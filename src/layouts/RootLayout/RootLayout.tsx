import './RootLayout.scss';
import { Outlet } from 'react-router';
// COMPONENTS
import { ScrollToTop } from '../../components/shared/ScrollToTop/ScrollToTop';
import { Header } from '../../components/shared/Header/Header';
import { Footer } from '../../components/shared/Footer/Footer';
import { Sidebar } from '../../components/shared/Sidebar/Sidebar';
import { Overlay } from '../../components/shared/Overlay/Overlay';


export const RootLayout = () => {


  return (
    <div className='root-layout'>
      
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Overlay />

      <main className='root-layout__main'>
        <Outlet />
      </main>

      <Footer />
    </div>
    
  )
}