import './FeaturedProducts.scss';
import { Link } from 'react-router';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
// DATA
import { products } from '../../../data/data-products';
import { formatPrice } from '../../../utils/currencyUtils';


export const FeaturedProducts = () => {
  
  return (
    <section className='featured'>
      <div className='featured__container'>

        <Title title={'Featured Products'} />

        <ul className='featured__products'>
          {products?.map(product => (
            <li key={product._id} className='featured__card'>
              <Link className='featured__card-link' to={`/product/${product?.variations[0]?.slug}`}>
                <div className='featured__img-wrapper'>

                  <img 
                    className='featured__img' 
                    src={product?.colors[0]?.images[0]?.url} 
                    alt={product?.variations[0]?.name} 
                  />

                </div>
              </Link>

              <div className='featured__text-wrapper'>
                <Link className='featured__card-h3-link' to={`/product/${product?.variations[0]?.slug}`}> {product?.variations[0]?.name}</Link>
                <p className='featured__card-p'>{formatPrice(product?.variations[0]?.price)}</p>
               
                {/* TODO: to select variations from featured products */}
                {/* {product?.variations?.length > 0 && (
                  <VariationColorButtons product={product} handleVariation={handleVariation} />
                )} */}
              </div>
            </li>
            ))}
        </ul>
      </div>
    </section>

  )
}