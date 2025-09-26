import { products } from '../data/data-products';
// INTERFACES
import type { Product } from '../interfaces/product.interface';


export interface ResponseProducts {
  readonly status: number;
  readonly data: {
    readonly products: Product[];
  };
}

export interface ResponseProduct {
  readonly status: number;
  readonly data: {
    readonly product?: Product;
    readonly message?: string;
  };
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
  GET PRODUCT BY SLUG
========================================================*/
export const getProductBySlug = (slug: string): Promise<ResponseProduct> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const product = products.find((p) => p.slug === slug);

      if (!product) {
        resolve({ status: 404, data: { message: 'Product not found' } });
        return;
      }

      resolve({
        status: 200,
        data: { product }
      })
    }, 100);
  })
}
/*========================================================
  GET PRODUCT BY SLUG & VARIATION ID 
========================================================*/
export const getProductBySlugAndVariationId = (slug: string, variantId: string): Promise<ResponseProduct> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const product = products.find((p) => p.slug === slug);

      if (!product) {
        resolve({ status: 404, data: { message: 'Product not found' }});
        return;
      }

      const variant = product.variations.find((v) => v._id === variantId);

      if (!variant) {
        resolve({ status: 404, data: { message: 'Variant not found' } });
        return;
      }

      resolve({
        status: 200,
        data: { product: { ...product, variations: [variant] } }
      });
    }, 400);

  })
}