import './ProductMeta.scss';
// INTERFACES
import type { Product, ProductVariation } from '../../../interfaces/product.interface';

type ProductMetaProps = {
  product: Product;
  variant: ProductVariation;
}


export const ProductMeta = ({ product, variant }: ProductMetaProps) => {
  
  return (
    <div className='product-meta'>

      <div className='product-meta__details-container'>
        <span className='product-meta__label'>Brand</span>
        <span className='product-meta__span'>{product?.brand}</span>
      </div>

      <div className='product-meta__details-container'>
        <span className='product-meta__label'>Category</span>
        <span  className='product-meta__span'>{product?.category}</span>
      </div>
      
      <div className='product-meta__details-container'>
        <span className='product-meta__label'>Sku</span>
        <span className='product-meta__sku'>{variant?.sku}</span>
      </div> 

      <div className='product-meta__details-container'>
        <span className='product-meta__label'>Stock</span>
        {variant?.stock > 0 ? (
            <span className='product-meta__span product-meta__span--available'>available</span> 
          ) : (
            <span className='product-meta__span product-meta__span--out-of-stock'>Out of Stock</span>
        )}
      </div> 

    </div>
  )
}