import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
// INTERFACES
import type { Product as ProductType, ProductVariation} from '../../interfaces/product.interface';
// UTILS
import { getUniqueColorOptions, getUniqueMemoryOptions } from '../../utils/colorUtils';
import { getSafeVariantFromParams } from '../../utils/productUtils';
import { slugify } from '../../utils/stringUtils';
// COMPONENTS
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Variant } from '../../components/products/Variant/Variant';
import { RelatedProducts } from '../../components/products/RelatedProducts/RelatedProducts';



export const Product = () => {
  
  const { slug, color, memory } = useParams();
  const navigate = useNavigate();

  const { product, allProducts }: { product: ProductType, allProducts: ProductType[] } = useLoaderData() || {};

  // Try to match variant eagerly || use product?.variations[0]
  const safeVariant = getSafeVariantFromParams(product, memory, color);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariation>(
    safeVariant
  );

  useEffect(() => {
    setSelectedVariant(safeVariant);
  }, [safeVariant]);

  // Update selected variation based on selected color and memory
  const handleVariantChange = (memory: string,color: string ) => {
    const newVariant = product?.variations.find(
      (v) => v.color === color && v.memory === memory
    );

    if (newVariant?._id === selectedVariant?._id) return;
    
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
      <RelatedProducts 
        product={product} 
        products={allProducts}
      />
    </>
  )
}