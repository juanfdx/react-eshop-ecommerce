// INTERFACES
import type { Product } from '../interfaces/product.interface';
// UTILS
import { formatPriceNoFraction } from './currencyUtils';
import { formatInches, formatStorageSize } from './stringUtils';



/*========================================================
  CATEGORY COUNTS - NO VARIATIONS INCLUDED
========================================================*/
type CategoryCount = {
  name: string;
  count: number;
};

export const getCategoryCounts = (products: Product[]): CategoryCount[] => {
  const map = new Map<string, number>();

  products.forEach(product => {
    const category = product.category?.trim().toLowerCase();
    if (!category) return;

    map.set(category, (map.get(category) || 0) + 1);
  });

  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};


/*========================================================
  BRAND COUNTS - NO VARIATIONS INCLUDED
========================================================*/
type BrandCount = {
  name: string;
  count: number;
};

export const getBrandCounts = (products: Product[]): BrandCount[] => {
  const map = new Map<string, number>();

  products.forEach(product => {
    const brand = product.brand?.trim().toLowerCase();
    if (!brand) return;

    map.set(brand, (map.get(brand) || 0) + 1);
  });

  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};


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


/*========================================================
  GET FILTER LABELS
========================================================*/
export const getFilterLabels = (param: { key: string; value: string }) => {
  
  if (param?.key === 'max_price') {
    return `${formatPriceNoFraction(Number(param?.value))} max`;
  } else if (param?.key === 'min_price') {
    return `${formatPriceNoFraction(Number(param?.value))} min`;
  } else if (param?.key === 'rating') {
    return `rating ${param?.value}`;
  } else if (param?.key === 'memory') {
    return `${formatStorageSize(param?.value)}`;
  } else if (param?.key === 'size') {
    return `${formatInches(param?.value)}`;

  } else if (param?.key === 'sort' && param?.value === 'top_rated') {
    return `top rated`;
  } else if (param?.key === 'sort' && param?.value === 'name_asc') {
    return `name A-Z`;
  } else if (param?.key === 'sort' && param?.value === 'name_desc') {
    return `name Z-A`;
  } else if (param?.key === 'sort' && param?.value === 'price_highest') {
    return `price highest`;
  } else if (param?.key === 'sort' &&  param?.value === 'price_lowest') {
    return `price lowest`;
  } else if (param?.key === 'page') {
    return `page ${param?.value}`;
  } else {
    return param?.value;
  }
}
