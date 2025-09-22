import './StoreContact.scss';
// COMPONENTS
import { StoreLocation } from '../StoreLocation/StoreLocation';


export const StoreContact = () => {
  
  return (
    <section className='store-contact'>
      <div className='store-contact__container'>

        <div className='store-contact__col'>
          Form
        </div>

        <div className='store-contact__col'>
          <StoreLocation />
        </div>
      </div>
    </section>
  )
}