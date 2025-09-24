import './Variant.scss';
import { useSearchParams } from 'react-router';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
// COMPONENTS
import { StarRatingDisplay } from '../../shared/StarRatingDisplay/StarRatingDisplay';
import { ProductColorSelector } from '../ProductColorSelector/ProductColorSelector';
import { ProductMemorySelector } from '../ProductMemorySelector/ProductMemorySelector';
import { ProductImageSlider } from '../../sliders/ProductImageSlider/ProductImageSlider';


type VariantProps = {
  product: Product;
  colors: [string, string][];
  memories: string[];
}

export const Variant = ({ product, colors, memories }: VariantProps) => {

  const [searchParams] = useSearchParams();
  const variantId = searchParams.get('variantId');

  const variant = product.variations.find(v => v._id === variantId);
  if (!variant) return <div>Variant not found</div>;
  
  
  return (
    <section className='variant'>
      <div className='variant__container'>
        {/* ROW 1 */}
        <div className='variant__images'>
          <ProductImageSlider images={variant?.images} />
        </div>
        
        {/* ROW 2 */}
        <div className='variant__info'>
          {/* product name */}
          <h1 className='variant__name'>{variant?.name}</h1>
          {/* product rating */}
          <StarRatingDisplay rating={product?.averageRating} reviews={product?.reviews?.length} />
          {/* product info */}
          <p className='variant__price'>{formatPrice(variant?.price)}</p>
          <div className='variant__line-separator'></div>
          <p className='variant__description'>{product?.description}</p>       
          {/* product color selector */}
          <ProductColorSelector colors={colors} variant={variant} />
          {/* product memory selector */}
          <ProductMemorySelector memories={memories} variant={variant} />

        </div>

      </div>
    </section>
  )
}