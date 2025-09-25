import './ProductTabs.scss';
import { useState } from 'react';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { capitalizeFirstLetter } from '../../../utils/stringUtils';
// IMAGES
import avatar from '../../../assets/images/placeholders/avatar.webp';
// COMPONENTS
import { StarRating } from '../../shared/StarRating/StarRating';
import { RatingBadge } from '../../shared/RatingBadge/RatingBadge';
//DATA
const tabNames: string[] = ['description', 'specifications', 'reviews'];

type ProductTabsProps = {
  product: Product;
}


export const ProductTabs = ({ product }: ProductTabsProps) => {

  const [position, setPosition] = useState(0);
  

  return (
    <div className='product-tabs'>

      {/* tabs titles */}
      <ul className='product-tabs__ul'>
        {tabNames?.map((tab, index) => (
          <li key={index} className='product-tabs__li'>
            <button 
              className={`product-tabs__btn ${(position === index) ? 'product-tabs__btn--active' : ''}`}
              onClick={() => setPosition(index)}
            >
              {tab === 'reviews' ? `${tab} (${product?.reviews?.length})` : tab}
            </button>
          </li>
        ))}
      </ul>

      {/* tabs wrapper */}
      <div className='product-tabs__wrapper'>
        {/* description */}
        <div className={`product-tabs__panel ${(position === 0) ? 'product-tabs__panel--active' : ''}`}>   
          <ul className='product-tabs__description-ul'>

            {product?.features?.map((desc, i) =>
              <li key={i} className='product-tabs__description-li'>
                <strong className='product-tabs__description-strong'>{desc.key}: &nbsp;</strong>
                <span className='product-tabs__description-span'>{desc.value}</span>
              </li>
            )}

          </ul>
        </div>
        
        {/* specs */}
        <div className={`product-tabs__panel ${(position === 1) ? 'product-tabs__panel--active' : ''}`}>     
          <ul className='product-tabs__spec-container'>

            {product?.specs?.map((spec, i) =>
              <li key={i} className='product-tabs__spec-li'>   
                <strong className='product-tabs__spec-name'>{capitalizeFirstLetter(spec.key)}</strong>
                <ul className='product-tabs__spec-ul'>
                  {spec.value.map((value, j) =>
                      <li key={j} className='product-tabs__spec-value'>{capitalizeFirstLetter(value)}</li>
                  )}
                </ul>
              </li>
            )}

          </ul>
        </div>

        {/* reviews */}
        <div className={`product-tabs__panel ${(position === 2) ? 'product-tabs__panel--active' : ''}`}>
          <div className='product-tabs__comments'>

            {product?.reviews?.length > 0 ? (

              <ul className='product-tabs__comments-ul'>
                {product?.reviews?.map((review, i) =>
                
                  <li key={i} className='product-tabs__comments-li'>
                    <div className='product-tabs__comment'>

                      <img className='product-tabs__comment-avatar' src={avatar} alt="user avatar" />
                      
                      <div className='product-tabs__comment-text-box'>

                        <div className='product-tabs__comment-stars-wrapper'>
                          <StarRating rating={review.rating} />
                        </div>

                        <h6 className='product-tabs__comment-h6'>
                          <strong className='product-tabs__comment-strong'>{review.user}</strong>
                          <span className='product-tabs__comment-date'>- October 9, 2023</span> 
                          <div className='product-tabs__comment-one-star-wrapper'>
                            <RatingBadge rating={review.rating} />
                          </div>
                         
      
                        </h6>
                        <p className='product-tabs__comment-p'>{review.comment}</p>
                      </div>
                    </div>
                  </li>            
                
                )}

              </ul>

            ) : (

              <h2 className='product-tabs__h2'>
                No reviews for this product yet.
              </h2>
            )}

          </div>
        </div>
      </div>

    </div>
  )
}