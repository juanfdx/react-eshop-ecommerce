import { createBrowserRouter, RouterProvider } from 'react-router'
// LAYOUT
import { RootLayout } from './layouts/RootLayout/RootLayout'
// PAGES
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Products } from './pages/Products/Products'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
