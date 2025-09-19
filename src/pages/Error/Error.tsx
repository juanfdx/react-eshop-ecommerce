import './Error.scss';
import { Link } from 'react-router';


export const Error = () => {

  console.error(`Error: 404 Not Found`);
  
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