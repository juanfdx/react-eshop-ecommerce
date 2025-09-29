import './InitialLoader.scss';
// COMPONENTS
import { PulseDotsLoader } from '../PulseDotsLoader/PulseDotsLoader';


export const InitialLoader = () => {
  
  return (
    <div className='initial-loader'>
      <h1 className='initial-loader__title'>e-SHOP</h1>
      <PulseDotsLoader />
    </div>
  )
}