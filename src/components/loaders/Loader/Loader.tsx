import './Loader.scss';
// COMPONENTS
import { PulseDotsLoader } from '../PulseDotsLoader/PulseDotsLoader';


export const Loader = () => {
  
  return (
    <div className='loader'>
      <h1 className='loader__title'>e-SHOP</h1>
      <PulseDotsLoader /> 
    </div>
  )
}