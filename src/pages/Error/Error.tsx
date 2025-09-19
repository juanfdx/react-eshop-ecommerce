import './Error.scss';
import { Link, useRouteError } from 'react-router';


export const Error = () => {

  const error = useRouteError();
  if (error?.status && error?.statusText) {
    console.error(`Error ${error?.status} ${error?.statusText}`); 
    
  } else {
    console.error(error);
  }
  
  
  return (
    <main className='error'>
      <div className='error__container'>

        <h1 className='error__status'>404</h1>
        <p className='error__text'>
          Sorry, we couldn't find the page you're looking for. Use the go back button below.
        </p>

        <Link className='error__link' to={'/'}>back to home</Link>

      </div>
    </main>
  )
}