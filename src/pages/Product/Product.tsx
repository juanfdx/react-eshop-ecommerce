import { useLoaderData, useNavigate, useParams } from 'react-router';
// INTERFACES
import type { Product as ProductType, ProductVariation} from '../../interfaces/product.interface';
// UTILS
import { getUniqueColorOptions, getUniqueMemoryOptions } from '../../utils/colorUtils';
import { slugify } from '../../utils/stringUtils';
// COMPONENTS
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Variant } from '../../components/products/Variant/Variant';
import { useEffect, useState } from 'react';
import { getSafeVariantFromParams } from '../../utils/productUtils';



export const Product = () => {
  
  const { slug, color, memory } = useParams();
  const navigate = useNavigate();

  const {product} = useLoaderData() as {product: ProductType} || {};

  // Try to match variant eagerly || use product?.variations[0]
  const safeVariant = getSafeVariantFromParams(product, memory, color);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariation>(
    safeVariant
  );

  // Navigate to valid variant if URL params are invalid
  useEffect(() => {
    if (safeVariant) {
      navigate(
        `/product/${slug}/${slugify(safeVariant.memory)}/${slugify(safeVariant.color)}`,
        { replace: true } // true for no back-button history
      );
    }
  }, [safeVariant, navigate, slug]);


  // Update selected variation based on selected color and memory
  const handleVariantChange = (color: string, memory: string) => {
    const newVariant = product?.variations.find(
      (v) => v.color === color && v.memory === memory
    );

    if (newVariant) {
      setSelectedVariant(newVariant);
      navigate(
        `/product/${slug}/${slugify(newVariant.memory)}/${slugify(newVariant.color)}`,
        { replace: false } // false for back-button history
      );
    }
  };



  return (
    <>
      <Breadcrumbs label={'products'} href={product?.category} />
      <Variant 
        product={product} 
        variant={selectedVariant}
        colors={getUniqueColorOptions(product)} 
        memories={getUniqueMemoryOptions(product)} 
        handleVariantChange={handleVariantChange}
      />
    </>
  )
}