import './ProductCardSkeleton.scss';

type ProductCardSkeletonProps = {
  variant?: 'grid' | 'list';
};

export const ProductCardSkeleton = ({ variant = 'grid' }: ProductCardSkeletonProps) => {
  return (
    <li className={`product-card-skeleton ${variant === 'list' ? 'product-card-skeleton--list' : ''}`}>
      <div
        className={`product-card-skeleton__img-wrapper ${variant === 'list' ? 'product-card-skeleton__img-wrapper--list' : ''}`}
      >
        <div className="product-card-skeleton__img" />
      </div>

      <div
        className={`product-card-skeleton__details ${variant === 'list' ? 'product-card-skeleton__details--list' : ''}`}
      >
        <div className="product-card-skeleton__title" />
        {variant === 'list' && <div className="product-card-skeleton__description" />}
        <div className="product-card-skeleton__rating" />
        <div className="product-card-skeleton__price" />
      </div>
    </li>
  );
};
