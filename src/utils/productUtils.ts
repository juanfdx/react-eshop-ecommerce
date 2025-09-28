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
  if (!memory || !color || !product ) return undefined;

  return product?.variations?.find(
    (v) =>
      v.memory.toLowerCase() === deslugify(memory.toLowerCase()) &&
      v.color.toLowerCase() === deslugify(color.toLowerCase())
  );
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
  
  if (relatedProducts?.length == 0) return { relatedProducts: products, isRelated: false };

  return { relatedProducts, isRelated: true }; 
}