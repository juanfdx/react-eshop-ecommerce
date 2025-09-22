import './StoreLocation.scss';
// COMPONENTS
import { StoreDetails } from '../StoreDetails/StoreDetails';
// DATA
import { stores } from '../../../data/data-stores';



export const StoreLocation = () => {
  
  return (
    <div className='store-location'>

      <h2 className='store-location__title'>Store Location</h2>

      <p className='store-location__text'>It was not possible to renovate the two little houses on the land because they were in ruins.</p>
      
      <div className='store-location__stores'>
        {stores?.map(store =>
          <StoreDetails key={store._id} store={store} />
        )}
      </div>

    </div>
  )
}