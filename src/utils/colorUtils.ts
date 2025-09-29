import type { Product } from '../interfaces/product.interface';


/*========================================================
  DETECT COLORS IN WHITE SPECTRUM
========================================================*/
export const isWhiteSpectrum = (hexColor: string, tolerance = 20) => {

  // Ensure the hex color is in the correct format
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexColor)) {
    throw new Error("Invalid hex color format");
  }

  // Convert 3-digit hex color to 6-digit
  if (hexColor.length === 4) {
      hexColor = "#" + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2] + hexColor[3] + hexColor[3];
  }

  // Parse the hex color into RGB components
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Define white color values and tolerance
  const white = 255;

  // Check if the color is close to white within the given tolerance
  return (
      Math.abs(white - r) <= tolerance &&
      Math.abs(white - g) <= tolerance &&
      Math.abs(white - b) <= tolerance
  );
}


/*========================================================
  GET UNIQUE COLOR OPTIONS
========================================================*/
export function getUniqueColorOptions(product: Product): [string, string][] {
  return [...new Map(product.variations.map((v) => [v.color, v.hexCode])).entries()];
}


/*========================================================
  GET UNIQUE MEMORY OPTIONS
========================================================*/
export function getUniqueMemoryOptions(product: Product): string[] {
  const memories = product.variations
    .map((v) => v.memory?.trim())           // Handle undefined/null and trim whitespace
    .filter((m): m is string => !!m);       // Filter out falsy (null, '', undefined)

  const uniqueMemories = [...new Set(memories)];

  return uniqueMemories.length > 0 ? uniqueMemories : [];
}


/*========================================================
  GET UNIQUE SIZE OPTIONS
========================================================*/
export function getUniqueSizeOptions(product: Product): string[] {
  const sizes = product.variations
    .map((v) => v.size?.trim())             // Handle undefined/null and trim whitespace
    .filter((s): s is string => !!s);       // Filter out falsy (null, '', undefined)

  const uniqueSizes = [...new Set(sizes)];

  return uniqueSizes.length > 0 ? uniqueSizes : [];
}


/*========================================================
  GET UNIQUE colors
========================================================*/
export function getUniqueColors(product: Product): string[] {
  const colors = product?.variations?.map(v => v.color?.toLowerCase()?.trim());
  const unique = Array.from(new Set(colors));
  return unique;
}