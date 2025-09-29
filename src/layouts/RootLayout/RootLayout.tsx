import './RootLayout.scss';
import { Outlet, useNavigation } from 'react-router';
// COMPONENTS
import { Header } from '../../components/shared/Header/Header';
import { Footer } from '../../components/shared/Footer/Footer';
import { Sidebar } from '../../components/shared/Sidebar/Sidebar';
import { Overlay } from '../../components/shared/Overlay/Overlay';
import { Loader } from '../../components/loaders/Loader/Loader';


export const RootLayout = () => {

  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className='root-layout'>
      
      <Header />
      <Sidebar />
      <Overlay />

      <main className='root-layout__main'>
        {isNavigating ? <Loader /> : <Outlet />}
      </main>

      <Footer />
    </div>
    
  )
}