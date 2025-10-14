import './ProductImageSkeleton.scss';

type ProductImageSkeletonProps = {
  cardWidth: number;
  type?: 'card' | 'thumbnail';
};

export const ProductImageSkeleton = ({cardWidth, type = 'card'}: ProductImageSkeletonProps) => {
  
  return (
    <li 
      className={`product-image-skeleton ${type === 'thumbnail' ? 'product-image-skeleton--thumbnail' : ''}`} 
      style={{width: `${cardWidth}%`}}
    >
      <div className='product-image-skeleton__layer-canvas'></div>
    </li>
  )
}