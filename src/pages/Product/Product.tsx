import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
// INTERFACES
import type { Product as ProductType, ProductVariation} from '../../interfaces/product.interface';
// HOOKS
import { usePageLoading } from '../../hooks/usePageLoading';
// UTILS
import { getUniqueColorOptions, getUniqueMemoryOptions, getUniqueSizeOptions } from '../../utils/colorUtils';
import { getSafeVariantFromParams } from '../../utils/productUtils';
import { slugify } from '../../utils/stringUtils';
// COMPONENTS
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Variant } from '../../components/products/Variant/Variant';
import { RelatedProducts } from '../../components/products/RelatedProducts/RelatedProducts';



export const Product = () => {
  
  const { slug, memory, size, color } = useParams();
  const navigate = useNavigate();

  const { product, allProducts }: { product: ProductType, allProducts: ProductType[] } = useLoaderData() || {};

  const isLoading = usePageLoading();

  // Try to match variant eagerly || use product?.variations[0]
  const safeVariant = getSafeVariantFromParams(product, memory, size, color);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariation>(
    safeVariant
  );

  useEffect(() => {
    setSelectedVariant(safeVariant);
  }, [safeVariant]);

  // Update selected variation based on selected color and memory
  const handleVariantChange = (memory: string, size: string, color: string ) => {
    if (!color || !product) return;

    // this whole expression returns true only if v.memory exists and is not just whitespace.
    const hasMemoryVariants = product.variations.some(v => !!v.memory?.trim());
    const hasSizeVariants = product.variations.some(v => !!v.size?.trim());


    const newVariant = product.variations.find((v) => {
      const colorMatch = v.color === color;
      const memoryMatch = hasMemoryVariants ? v.memory === memory : true;
      const sizeMatch = hasSizeVariants ? v.size === size : true;

      return colorMatch && memoryMatch && sizeMatch;
    });

    if (!newVariant || newVariant._id === selectedVariant?._id) return;

    setSelectedVariant(newVariant);

    const memorySlug = newVariant?.memory ? `${slugify(newVariant.memory)}` : undefined;
    const sizeSlug = newVariant?.size ? `${slugify(newVariant.size)}` : undefined;
    const colorSlug = `${slugify(newVariant.color)}`;

    const url = 
        memorySlug
        ? `/product/${slug}/memory/${memorySlug}/${colorSlug}`
        : sizeSlug
        ? `/product/${slug}/size/${sizeSlug}/${colorSlug}`
        : `/product/${slug}/${colorSlug}`;

    navigate(url);
  };



  return (
    <>
      <Breadcrumbs label={'products'} href={product?.category} />
      <Variant 
        product={product} 
        variant={selectedVariant}
        colors={getUniqueColorOptions(product)} 
        memories={getUniqueMemoryOptions(product)} 
        sizes={getUniqueSizeOptions(product)}
        handleVariantChange={handleVariantChange}
        isLoading={isLoading}
      />
      <RelatedProducts 
        product={product} 
        products={allProducts}
        isLoading={isLoading}
      />
    </>
  )
}