import { createBrowserRouter, RouterProvider } from 'react-router'
// LAYOUT
import { RootLayout } from './layouts/RootLayout/RootLayout'
// COMPONENTS
import { ErrorElement } from './components/shared/ErrorElement/ErrorElement'
// PAGES
import { Error } from './pages/Error/Error'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Products } from './pages/Products/Products'
import { Product } from './pages/Product/Product'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

// LOADERS
import { productLoader } from './loaders/productLoader'




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />
      },
      {
        path: 'product/:slug/:memory/:color',
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



function App() {
  return <RouterProvider router={router} />
}

export default App
