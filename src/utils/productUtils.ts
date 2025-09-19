import type { ProductVariation } from '../interfaces/product.interface';


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