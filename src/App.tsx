import { createBrowserRouter, RouterProvider } from 'react-router'
// LAYOUT
import { RootLayout } from './layouts/RootLayout/RootLayout'
// PAGES
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: 'products',
        element: <h1>Products</h1>
      },
      {
        path: 'about',
        element: <h1>About</h1>
      },
      {
        path: 'contact',
        element: <h1>Contact</h1>
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
