import { products } from '../data/data-products';
// INTERFACES
import type { Product, ProductVariation } from '../interfaces/product.interface';


export interface ResponseProducts {
  readonly status: number;
  readonly data: {
    readonly products: Product[];
  };
}

export interface ResponseProduct {
  readonly status: number;
  readonly data?: {
    readonly product: Product;
    readonly variation: ProductVariation;
  };
  readonly error?: string;
}



/*==================================================
  GET PRODUCTS 
===================================================*/
export const getProducts = (): Promise<ResponseProducts> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve({ status: 200, data: { products } })
    }, 400);
  });
}


/*========================================================
  GET PRODUCT BY SLUG & VARIATION ID 
========================================================*/
export const getProductBySlugAndVariationId = (slug: string, variationId: string): Promise<ResponseProduct> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const product = products.find((p) => p.slug === slug);

      if (!product) {
        resolve({ status: 404, error: 'Product not found' });
        return;
      }

      const variation = product.variations.find((v) => v._id === variationId);

      if (!variation) {
        resolve({ status: 404, error: 'Variation not found' });
        return;
      }

      resolve({
        status: 200,
        data: { product, variation }
      });
    }, 400);

  })
}