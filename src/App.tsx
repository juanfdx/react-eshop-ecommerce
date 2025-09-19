import { createBrowserRouter, RouterProvider } from 'react-router'
// LAYOUT
import { RootLayout } from './layouts/RootLayout/RootLayout'
// PAGES
import { Error } from './pages/Error/Error'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Products } from './pages/Products/Products'
import { Product } from './pages/Product/Product'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { ErrorElement } from './components/shared/ErrorElement/ErrorElement'




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
        element: <Products />
      },
      {
        path: 'product/:slug',
        element: <Product />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }

])



function App() {
  return <RouterProvider router={router} />
}

export default App
