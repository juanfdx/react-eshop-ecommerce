import { createBrowserRouter } from 'react-router';
// LAYOUTS
import { RootLayout } from '../layouts/RootLayout/RootLayout';
// PAGES
import { Home } from '../pages/Home/Home';
import { Products } from '../pages/Products/Products';
import { Product } from '../pages/Product/Product';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Error } from '../pages/Error/Error';
// COMPONENTS
import { InitialLoader } from '../components/loaders/InitialLoader/InitialLoader';
import { ErrorElement } from '../components/shared/ErrorElement/ErrorElement';

// LOADERS
import { productsLoader } from '../loaders/productsLoader';
import { productLoader } from '../loaders/productLoader';




export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    hydrateFallbackElement: <InitialLoader />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader
      },
      {
        path: 'product/:slug/memory/:memory/:color',
        element: <Product />,
        errorElement: <ErrorElement />,
        loader: productLoader
      },
      {
        path: 'product/:slug/size/:size/:color',
        element: <Product />,
        loader: productLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'product/:slug/:color',
        element: <Product />,
        errorElement: <ErrorElement />,
        loader: productLoader
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorElement />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorElement />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorElement />
  }
])