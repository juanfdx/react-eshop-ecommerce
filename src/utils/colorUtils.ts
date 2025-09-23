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
  return [...new Set(product.variations.map((v) => v.memory))];
}