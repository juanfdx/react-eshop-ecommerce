// INTERFACES
import type { Product } from '../interfaces/product.interface';



/*========================================================
  GET MEMORIES COUNTS
========================================================*/
type MemoryCount = {
  memory: string;
  quantity: number;
};

export function getMemoryCounts(products: Product[]): MemoryCount[] {
  const memoryMap = new Map<string, number>();

  for (const product of products) {
    for (const variation of product.variations || []) {
      const mem = variation.memory?.toLowerCase().trim();
      if (!mem) continue; // Skip empty or invalid memory values

      memoryMap.set(mem, (memoryMap.get(mem) || 0) + 1);
    }
  }

  // Convert Map to array and sort by quantity descending
  return Array.from(memoryMap.entries())
    .map(([memory, quantity]) => ({ memory, quantity }))
    .sort((a, b) => b.quantity - a.quantity);
}


/*========================================================
  GET SIZES COUNT
========================================================*/
type SizeCount = {
  size: string;
  quantity: number;
};

export function getSizeCounts(products: Product[]): SizeCount[] {
  const sizeMap = new Map<string, number>();

  for (const product of products) {
    for (const variation of product.variations || []) {
      const size = variation.size?.toLowerCase().trim();
      if (!size) continue; // Skip empty or undefined sizes

      sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
    }
  }

  // Convert to array and sort by quantity (descending)
  return Array.from(sizeMap.entries())
    .map(([size, quantity]) => ({ size, quantity }))
    .sort((a, b) => b.quantity - a.quantity);
}


/*========================================================
  GET COLORS WITH HEX COUNTS 
========================================================*/
type ColorEntry = {
  name: string;
  code: string;
  quantity: number;
};

export function getColorCountsWithHexCode(products: Product[]): ColorEntry[] {
  const colorMap = new Map<string, ColorEntry>();

  for (const product of products) {
    for (const variation of product.variations || []) {
      const color = variation.color?.toLowerCase().trim();
      const code = variation.hexCode?.trim();

      if (!color || !code) continue;

      const key = `${color}-${code}`;

      if (colorMap.has(key)) {
        colorMap.get(key)!.quantity += 1;
      } else {
        colorMap.set(key, { name: color, code, quantity: 1 });
      }
    }
  }

  // Convert Map to array and sort by quantity descending
  return Array.from(colorMap.values()).sort((a, b) => b.quantity - a.quantity);
}


