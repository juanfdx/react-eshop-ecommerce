import './Variant.scss';
// INTERFACES
import type { Product } from '../../../interfaces/product.interface';
import { useSearchParams } from 'react-router';
import { formatPrice } from '../../../utils/currencyUtils';
import { StarRatingDisplay } from '../../shared/StarRatingDisplay/StarRatingDisplay';
import { ProductColorSelector } from '../ProductColorSelector/ProductColorSelector';
import { ProductMemorySelector } from '../ProductMemorySelector/ProductMemorySelector';


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
          {/* <ProductSlider images={selectedVariation?.images} /> */}
        </div>

        <div className='variant__info'>

          <h1 className='variant__name'>{variant?.name}</h1>

          <StarRatingDisplay rating={product?.averageRating} reviews={product?.reviews?.length} />
          
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