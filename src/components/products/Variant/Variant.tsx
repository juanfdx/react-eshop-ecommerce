import './Variant.scss';
import { useState } from 'react';
// INTERFACES
import type { Product, ProductVariation } from '../../../interfaces/product.interface';
// UTILS
import { formatPrice } from '../../../utils/currencyUtils';
// COMPONENTS
import { StarsReviews } from '../../shared/StarsReviews/StarsReviews';
import { ProductColorSelector } from '../ProductColorSelector/ProductColorSelector';
import { ProductMemorySelector } from '../ProductMemorySelector/ProductMemorySelector';
import { ProductImageSlider } from '../../sliders/ProductImageSlider/ProductImageSlider';
import { AmountButtons } from '../../shared/AmountButtons/AmountButtons';
import { ProductMeta } from '../ProductMeta/ProductMeta';
import { ProductTabs } from '../ProductTabs/ProductTabs';


type VariantProps = {
  product: Product;
  variant: ProductVariation;
  colors: [string, string][];
  memories: string[];
  handleVariantChange: (color: string, memory: string) => void
}

export const Variant = ({ product, variant, colors, memories, handleVariantChange }: VariantProps) => {

  const [amount, setAmount] = useState<number>(1);
  

  const cartProduct = {
    _id: variant?._id,
    name: variant?.name,
    description: product?.description,
    brand: product?.brand,
    product_id: product?._id,
    category: product?.category,
    price: variant?.price,
    color: variant?.color,
    hexCode: variant?.hexCode,
    memory: variant?.memory,
    images: variant?.images,
    quantity: amount
  }

  const addToCart = () => {
    console.log(cartProduct);
    // dispatch(addItem(cartProduct));
  }

  
  
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
          <StarsReviews rating={product?.averageRating} reviews={product?.reviews?.length} />
          {/* product info */}
          <p className='variant__price'>{formatPrice(variant?.price)}</p>
          <div className='variant__line-separator'></div>
          <p className='variant__description'>{product?.description}</p>       
          {/* product color selector */}
          <ProductColorSelector colors={colors} variant={variant} handleVariantChange={handleVariantChange} />
          {/* product memory selector */}
          <ProductMemorySelector memories={memories} variant={variant} handleVariantChange={handleVariantChange} />
          {/* product buy buttons */}
          <AmountButtons variant={variant} amount={amount} setAmount={setAmount} addToCart={addToCart} />
          {/* product meta data */}
          <ProductMeta product={product} variant={variant} />
        </div>

      </div>
      {/* product info specs reviews*/}
      <ProductTabs product={product} />
    </section>
  )
}