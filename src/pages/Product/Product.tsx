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
  const handleVariantChange = (memory: string, color: string ) => {
    if (!color || !product) return;

    // this whole expression returns true only if v.memory exists and is not just whitespace.
    const hasMemoryVariants = product.variations.some(v => !!v.memory?.trim());

    const newVariant = product.variations.find((v) => {
      const colorMatch = v.color === color;
      const memoryMatch = hasMemoryVariants ? v.memory === memory : true; // memoryMatch is true if there are no memory variants

      return colorMatch && memoryMatch;
    });

    if (!newVariant || newVariant._id === selectedVariant?._id) return;

    setSelectedVariant(newVariant);

    const basePath = `/product/${slug}`;
    const memorySlug = newVariant.memory ? `/${slugify(newVariant.memory)}` : '';
    const colorSlug = `/${slugify(newVariant.color)}`;

    navigate(`${basePath}${memorySlug}${colorSlug}`, { replace: false });
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