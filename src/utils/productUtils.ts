// INTERFACES
import type { Product, ProductVariation } from '../interfaces/product.interface';
// UTILS
import { deslugify, slugify } from './stringUtils';


/*========================================================
  GET HIGHEST PRICED VARIATION FOR EACH UNIQUE COLOR
========================================================*/
export function getTopColorVariants(variations: ProductVariation[]): ProductVariation[] {
  const colorMap = variations.reduce<Record<string, ProductVariation>>((acc, variation) => {
    const existing = acc[variation.color];
    if (!existing || variation.price > existing.price) {
      acc[variation.color] = variation;
    }
    return acc;
  }, {});

  return Object.values(colorMap);
}


/*========================================================
  GET VARIANT FROM PARAMS
========================================================*/
export function getVariantFromParams(product: Product, memory?: string, color?: string): ProductVariation | undefined {
  if (!color || !product ) return undefined;

  const normalizedColor = deslugify(color.toLowerCase());
  const normalizedMemory = memory ? deslugify(memory.toLowerCase()) : undefined;

  const hasMemoryVariants = product.variations.some(v => !!v.memory?.trim());

  return product.variations.find((v) => {
    const variantColor = v.color.toLowerCase();
    const variantMemory = v.memory?.toLowerCase();

    // If product has memory variants, match both memory and color
    if (hasMemoryVariants) {
      return (
        variantColor === normalizedColor &&
        variantMemory === normalizedMemory
      );
    }

    // If product has no memory variants, match only color
    return variantColor === normalizedColor;
  });
}


/*========================================================
  GET SAFE VARIANT FROM PARAMS
========================================================*/
export function getSafeVariantFromParams(product: Product, memory?: string, color?: string): ProductVariation {
  return getVariantFromParams(product, memory, color) ?? product?.variations[0];
}


/*========================================================
GET PRODUCT VARIANT URL
========================================================*/
export function getProductVariantUrl(
  slug: string,
  variant: ProductVariation
): string {
  // check if variant has memory
  if (!variant?.memory) return `/product/${slug}/${slugify(variant?.color)}`;
  return `/product/${slug}/${slugify(variant?.memory)}/${slugify(variant?.color)}`;
}


/*========================================================
  GET FIRST PRODUCT VARIANT URL
========================================================*/
export function getFirstVariantUrl(product: Product): string {
  const variant = product?.variations[0];
  return getProductVariantUrl(product?.slug, variant);
}


/*========================================================
  GET RELATED PRODUCTS
========================================================*/
export const getRelatedProducts = (product: Product, products: Product[]) => {
  const relatedProducts = products.filter((p) => p?._id !== product?._id && p?.category === product?.category);
  
  if (relatedProducts?.length == 0) {
    const otherProducts = products.filter((p) => p?._id !== product?._id);
    return { relatedProducts: otherProducts, isRelated: false };
  };

  return { relatedProducts, isRelated: true }; 
}