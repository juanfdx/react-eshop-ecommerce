import './ErrorElement.scss';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';


export const ErrorElement = () => {
  
  const error = useRouteError();

  if (isRouteErrorResponse(error)) console.error(`Error: ${error?.status} ${error?.data}`); 
  else console.error(`Error: Something went wrong!`)


  return (
    <div className='error-element'>
      <div className='error-element__container'>

        <h1 className='error-element__title'>Oops!</h1>
        
        {isRouteErrorResponse(error) ? (
          <p className='error-element__text'>Sorry, {error?.data}</p>
        ) : (
          <p className='error-element__text'>Something went wrong</p>
        )}

        <Link className='error-element__link' to={'/'}>back to home</Link>

        <p className='error-element__text-error'>
          Error: {isRouteErrorResponse(error) ? error?.status : '404'}
        </p>

      </div>
    </div>
  );
}