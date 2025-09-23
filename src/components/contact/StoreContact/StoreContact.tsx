import './StoreContact.scss';
// COMPONENTS
import { StoreLocation } from '../StoreLocation/StoreLocation';
import { ContactForm } from '../ContactForm/ContactForm';


export const StoreContact = () => {
  
  return (
    <section className='store-contact'>
      <div className='store-contact__container'>

        <div className='store-contact__col'>
          <StoreLocation />
        </div>

        <div className='store-contact__col'>
          <ContactForm />
        </div>

      </div>
    </section>
  )
}