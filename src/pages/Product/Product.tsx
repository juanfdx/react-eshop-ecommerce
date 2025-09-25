import { useLoaderData } from 'react-router';
// INTERFACES
import type { Product as ProductType} from '../../interfaces/product.interface';
// UTILS
import { getUniqueColorOptions, getUniqueMemoryOptions } from '../../utils/colorUtils';
// COMPONENTS
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Variant } from '../../components/products/Variant/Variant';



export const Product = () => {

  const {product} = useLoaderData() as {product: ProductType} || {};

  if (!product) return <div>Product not found</div>;

  // Get unique color options (color name + color code) and memory options
  const colors = getUniqueColorOptions(product);
  const memories = getUniqueMemoryOptions(product);


  return (
    <>
      <Breadcrumbs label={'products'} href={product?.category} />
      <Variant 
        product={product} 
        colors={colors} 
        memories={memories} 
      />
    </>
  )
}