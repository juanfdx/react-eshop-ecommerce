import { useLoaderData, useSearchParams } from 'react-router';
// INTERFACES
import type { Product as ProductType, ProductVariation} from '../../interfaces/product.interface';
// UTILS
import { getUniqueColorOptions, getUniqueMemoryOptions } from '../../utils/colorUtils';
// COMPONENTS
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Variant } from '../../components/products/Variant/Variant';
import { useEffect, useState } from 'react';



export const Product = () => {

  const {product} = useLoaderData() as {product: ProductType} || {};
  const [selectedVariant, setSelectedVariant] = useState<ProductVariation | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const variantId = searchParams.get('variantId');
  
  // Update selectedVariant when variantId or product changes
  useEffect(() => {
    if (!product?.variations?.length) return;

    const variant = 
      product?.variations.find(v => v._id === variantId) || product?.variations[0];
      
    if (variant) setSelectedVariant(variant);
    else {
      const fallback = product.variations[0];
      setSelectedVariant(fallback);
      setSearchParams({ variantId: fallback._id }, { replace: true }) // Updates the URL without adding to browser history
    }
  }, [variantId, product?.variations]);

  if (!product || !selectedVariant) return <div>Product not found</div>;

  // Get unique color options (color name + color code) and memory options
  const colors = getUniqueColorOptions(product);
  const memories = getUniqueMemoryOptions(product);

  // Update selected variation based on selected color and memory
  const handleVariantChange = (color: string, memory: string) => {
    const newVariant = product?.variations?.find(
      (v) => v.color === color && v.memory === memory
    );
    if (newVariant) {
      setSelectedVariant(newVariant)
      setSearchParams({variantId: newVariant._id}, { replace: false }); // <- this updates the URL. Creates a new entry in the browser history.
    };
  };


  return (
    <>
      <Breadcrumbs label={'products'} href={product?.category} />
      <Variant 
        product={product} 
        variant={selectedVariant}
        colors={colors} 
        memories={memories} 
        handleVariantChange={handleVariantChange}
      />
    </>
  )
}