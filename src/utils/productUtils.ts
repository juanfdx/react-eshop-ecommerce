// INTERFACES
import type { Product, ProductVariation } from '../interfaces/product.interface';
// UTILS
import { deslugify, slugify } from './stringUtils';


/*========================================================
  GET HIGHEST PRICED VARIATION FOR EACH UNIQUE COLOR
========================================================*/
export function getTopColorVariants(variations: ProductVariation[]): ProductVariation[] {
  const colorMap = new Map<string, ProductVariation>();

  for (const variation of variations) {
    const existing = colorMap.get(variation.color);
    if (!existing || variation.price > existing.price) {
      colorMap.set(variation.color, variation);
    }
  }

  return Array.from(colorMap.values());
}


/*========================================================
  GET VARIANT FROM PARAMS
========================================================*/
export function getVariantFromParams(product: Product, memory?: string, size?: string, color?: string): ProductVariation | undefined {
  if (!color || !product ) return undefined;

  const normalizedColor = deslugify(color.toLowerCase());
  const normalizedMemory = memory ? deslugify(memory.toLowerCase()) : undefined;
  const normalizedSize = size ? deslugify(size.toLowerCase()) : undefined;

  const hasMemoryVariants = product.variations.some(v => !!v.memory?.trim());
  const hasSizeVariants = product.variations.some(v => !!v.size?.trim());

  return product.variations.find((v) => {
    const variantColor = v.color.toLowerCase();
    const variantMemory = v.memory?.toLowerCase();
    const variantSize = v.size?.toLowerCase();

    // If product has memory variants, match both memory and color
    if (hasMemoryVariants) {
      return (
        variantColor === normalizedColor &&
        variantMemory === normalizedMemory
      );
    }

    // If product has size variants, match both size and color
    if (hasSizeVariants) {
      return (
        variantColor === normalizedColor &&
        variantSize === normalizedSize
      );
    }

    // If product has no memory variants, match only color
    return variantColor === normalizedColor;
  });
}


/*========================================================
  GET SAFE VARIANT FROM PARAMS
========================================================*/
export function getSafeVariantFromParams(product: Product, memory?: string, size?: string, color?: string): ProductVariation {
  return getVariantFromParams(product, memory, size, color) ?? product?.variations[0];
}


/*========================================================
GET PRODUCT VARIANT URL
========================================================*/
export function getProductVariantUrl(
  slug: string,
  variant: ProductVariation
): string {
  const base = `/product/${slug}`;
  
  // /product/slug/memory/color
  if (variant?.memory) {
    return `${base}/memory/${slugify(variant?.memory)}/${slugify(variant?.color)}`;
  }
  // /product/slug/size/color
  if (variant?.size) {
    return `${base}/size/${slugify(variant?.size)}/${slugify(variant?.color)}`;
  } 
  // /product/slug/color
  return `${base}/${slugify(variant?.color)}`;
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


/*========================================================
  GET FEATURED PRODUCTS
========================================================*/
export const getFeaturedProducts = (products: Product[]): Product[] => {
  return products?.toSorted((a, b) => b.averageRating - a.averageRating)?.slice(0, 8);
}


/*========================================================
  GET MIN AND MAX PRICE FROM PRODUCTS
========================================================*/
export const getMinMaxPrice = (products: Product[]): { minPrice: number, maxPrice: number } => {
  const allPrices = products.flatMap(product =>
    product.variations.map(variation => variation.price ?? 0)
  );
  const min = Math.min(...allPrices);
  const max = Math.max(...allPrices);
  return { minPrice: min, maxPrice: max };
}


/*========================================================
  GET PRICE STEPS
========================================================*/
export const getPriceSteps = (maxPrice: number): number[] => {
  // Predefined breakpoints in cents (you can adjust if needed)
  const predefinedSteps = [0, 10000, 20000, 50000, 100000, 150000, 200000, 300000];

  // If maxPrice is within predefined range, find the next step >= maxPrice
  const nextBreakpoint = predefinedSteps.find(step => step >= maxPrice);

  let upperLimit = nextBreakpoint;

  // If no predefined step is large enough, calculate a dynamic upper limit
  if (!upperLimit) {
    const stepSize = 50000; // Or use another logic depending on your products
    upperLimit = Math.ceil(maxPrice / stepSize) * stepSize;
    predefinedSteps.push(upperLimit); // Add the dynamic step to the list
  }

  // Filter steps up to the upper limit
  const fullRange = predefinedSteps.filter(step => step <= upperLimit);

  return fullRange;
}