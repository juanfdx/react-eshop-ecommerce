import './RelatedProducts.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// HOOKS
import { useWindowSize } from '../../../hooks/useWindowSize';
// UTILS
import { getFirstVariantUrl, getRelatedProducts } from '../../../utils/productUtils';
import { formatPrice } from '../../../utils/currencyUtils';
// COMPONENTS
import { Title } from '../../shared/Title/Title';
import { RatingBadge } from '../../shared/RatingBadge/RatingBadge';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

type RelatedProductsProps = {
  product: Product;
  products: Product[];
};



export const RelatedProducts = ({ product, products }: RelatedProductsProps) => {

  const { relatedProducts, isRelated } = getRelatedProducts(product, products);

  const [index, setIndex] = useState<number>(1);
  const [imgToShow, setImgToShow] = useState<number>(4);
  const [productsArray, setProductsArray] = useState(relatedProducts);
  const [transition, setTransition] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
  const { width } = useWindowSize();

  const imgAmount = relatedProducts?.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const cardWidth = 100 / imgAmount 


  useEffect(() => {
    setTransition(false);
  
    if (width === undefined) return;
  
    const size =
      width < 480 ? 2 :
      width < 576 ? 3 :
      width < 768 ? 4 :
      width < 992 ? 5 :
      6;
  
    setImgToShow(size);
  }, [width]);


  // PREV CARD
  const handlePrevImage = () => {
    // prevent fast consecutive clicks
    if (isProcessing) return;
    setIsProcessing(true);
    
    setTransition(true);
    // Move the last item to the beginning of the array
    const newArray = [...productsArray];
    const lastImage = newArray.pop(); // Remove the last item
    if (lastImage) { newArray.unshift(lastImage) } // Add it to the beginning

    setIndex((prevIndex) => prevIndex - 1);
    
    setTimeout(() => {
      setProductsArray(newArray);
      setIsProcessing(false);
      setTransition(false); // End the transition effect after 500ms (duration of transition)
      setIndex((prevIndex) => prevIndex + 1);
    }, 500);
  };

  // NEXT CARD
  const handleNextImage = () => {
    // prevent fast consecutive clicks
    if (isProcessing) return;
    setIsProcessing(true);

    setTransition(true);
    // Move the first item to the end of the array
    const newArray = [...productsArray];
    const firstImage = newArray.shift(); // Remove the first item
    if (firstImage) { newArray.push(firstImage) } // Add it to the end

    setIndex((prevIndex) => prevIndex + 1);
    
    setTimeout(() => {
      setProductsArray(newArray);
      setIsProcessing(false);
      setTransition(false); // End the transition effect after 500ms (duration of transition)
      setIndex((prevIndex) => prevIndex - 1);
    }, 500);
  };



  return (
    <section className='related'>
      <div className='related__container'>

        <Title title={isRelated ? 'Related Products' : 'More Products'} center={true} />

        <div className='related__wrapper'>
          {/* SLIDER */}
          <div className='related__mask'>
            <ul 
              className='related__slide'
              style={{width: `${slideWidth}%`}}
            >
              {productsArray?.map(product => (
                <li
                  key={product._id} 
                  className='related__card'
                  style={{
                    width : `${cardWidth}%`,  
                    transform: ((imgToShow + 2) <= relatedProducts?.length ) ? `translateX(${-100 * index}%)` : 'translateX(0%)',
                    transition: transition ? 'transform 0.5s ease-in-out' : 'none',  
                  }}
                >
                  {/* IMAGE */}
                  <Link className='related__link' to={getFirstVariantUrl(product)}>
                    <div className='related__img-wrapper'>
                      <img 
                        className='related__img' 
                        src={product?.variations[0]?.images[0]?.url} 
                        alt={product?.variations[0]?.name} 
                      />
                    </div>
                  </Link>

                  {/* TEXT */}
                  <div className='related__text-wrapper'>   
                    <Link className='related__title' to={getFirstVariantUrl(product)}>
                    {product?.variations[0]?.name}
                    </Link>     
                    {product?.reviews?.length > 0 &&
                      <RatingBadge rating={product?.averageRating} reviews={product?.reviews?.length} small={true} />
                    }              
                    <p className='related__price'>{formatPrice(product?.variations[0]?.price)}</p>        
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          {(imgToShow + 2) <= relatedProducts?.length && (
            <div className='related__btns'>
              <button className='related__btn related__btn--prev' onClick={handlePrevImage}>
                <HiChevronLeft className='related__btn-chevron' />
              </button>
              <button className='related__btn related__btn--next' onClick={handleNextImage}>
                <HiChevronRight className='related__btn-chevron' />
              </button>
            </div>
          )}
        </div>
      
      </div>
    </section>

  )
}