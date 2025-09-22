import './StoreDetails.scss';
// INTERFACES
import type { Store } from '../../../data/data-stores';


type StoreDetailsProps = {
  store: Store
}

export const StoreDetails = ({store}: StoreDetailsProps) => {
  
  return (
    <div className='store-details'>
      <h4 className='store-details__name'>{store.name}</h4>
      <div className='store-details__address'>
        <p className='store-details__street'>{store.street}</p>
        <p className='store-details__city'>{store.city}</p>
        <p className='store-details__phone'>{store.phone}</p>
      </div>
    </div>
  )
}