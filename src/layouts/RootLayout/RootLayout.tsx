import './RootLayout.scss';
import { Outlet } from 'react-router';
// COMPONENTS
import { Header } from '../../components/shared/Header/Header';
import { Footer } from '../../components/shared/Footer/Footer';


export const RootLayout = () => {
  return (
    <div className='root-layout'>
      
      <Header />

      <main className='root-layout__main'>
        <Outlet />
      </main>

      <Footer />
    </div>
    
  )
}