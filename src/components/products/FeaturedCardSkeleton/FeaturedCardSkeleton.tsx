import './FeaturedCardSkeleton.scss';


export const FeaturedCardSkeleton = () => {
  
  return (
    <li className="featured-skeleton">
      <div className="featured-skeleton__img"></div>
      <div className="featured-skeleton__title"></div>
      <div className="featured-skeleton__rating"></div>
      <div className="featured-skeleton__price"></div>
    </li>
  );
};
