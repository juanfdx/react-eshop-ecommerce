import { useLoaderData, useNavigate, useParams } from 'react-router';
// INTERFACES
import type { Product as ProductType, ProductVariation} from '../../interfaces/product.interface';
// UTILS
import { getUniqueColorOptions, getUniqueMemoryOptions } from '../../utils/colorUtils';
import { deslugify, slugify } from '../../utils/stringUtils';
// COMPONENTS
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Variant } from '../../components/products/Variant/Variant';
import { useEffect, useState } from 'react';



export const Product = () => {
  
  const {product} = useLoaderData() as {product: ProductType} || {};
  const [selectedVariant, setSelectedVariant] = useState<ProductVariation | null>(null);
  
  const { slug, color, memory } = useParams();
  const navigate = useNavigate();

  // Get unique color options (color name + color code) and memory options
  const colors = getUniqueColorOptions(product);
  const memories = getUniqueMemoryOptions(product);
  

  // Update selectedVariant based on selected color and memory
  useEffect(() => {
    if (!product?.variations?.length || !color || !memory) return;

    const variant = product.variations.find(
      (v) =>
        v.memory.toLowerCase() === deslugify(memory.toLowerCase()) &&
        v.color.toLowerCase() === deslugify(color.toLowerCase())
    );

    if (variant) { setSelectedVariant(variant); } 
    else {
      // If color/memory combo is invalid, redirect to first valid one
      const fallback = product.variations[0];
      setSelectedVariant(fallback);
      navigate(
        `/product/${slug}/${slugify(fallback.memory)}/${slugify(fallback.color)}`,
        { replace: true }
      );
    }
  }, [product?.variations, color, memory, navigate, slug]);
  

  if (!product || !selectedVariant) return <div>Product not found</div>;


  // Update selected variation based on selected color and memory
  const handleVariantChange = (color: string, memory: string) => {
    const newVariant = product?.variations.find(
      (v) => v.color === color && v.memory === memory
    );

    if (newVariant) {
      setSelectedVariant(newVariant);
      navigate(
        `/product/${slug}/${slugify(newVariant.memory)}/${slugify(newVariant.color)}`,
        { replace: false } // or true for no back-button history
      );
    }
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