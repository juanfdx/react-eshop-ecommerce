import './ProductImageSkeleton.scss';

type ProductImageSkeletonProps = {
  cardWidth: number;
};

export const ProductImageSkeleton = ({cardWidth}: ProductImageSkeletonProps) => {
  
  return (
    <li className='product-image-skeleton' style={{width: `${cardWidth}%`}}>
      <div className='product-image-skeleton__layer-canvas'></div>
    </li>
  )
}