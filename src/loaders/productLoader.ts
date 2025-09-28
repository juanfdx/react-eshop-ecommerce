import { redirect, type LoaderFunctionArgs } from 'react-router';
// INTERFACES
import type { Product } from '../interfaces/product.interface';
import type { AxiosError } from 'axios';
// SERVICES
import { getAllProducts, getProductBySlug } from '../services/product.mock.service';
import { slugify } from '../utils/stringUtils';

interface ProductLoaderData {
  product: Product;
  allProducts: Product[];
}



export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  
  const { slug, memory, color } = params;

  if (!slug || !memory || !color) {
    throw new Response('Missing parameters', { status: 400 });
  }

  try {
    // First: get the product
    const productResponse = await getProductBySlug(slug);

    if (productResponse.status === 404) {
      throw new Response(productResponse.data?.message || 'Product not found', {
        status: 404,
      });
    }

    const product: Product = productResponse.data.product;

    // Find matching variant from URL params (update url if invalid)
    const matchedVariant = product.variations.find(
      (v) =>
        slugify(v.memory) === slugify(memory || '') &&
        slugify(v.color) === slugify(color || '')
      );

    // If invalid or missing color/memory, redirect to first valid variant
    if (!matchedVariant) {
      const defaultVariant = product.variations[0];
      const safeMemory = slugify(defaultVariant.memory);
      const safeColor = slugify(defaultVariant.color);

      return redirect(`/product/${slug}/${safeMemory}/${safeColor}`);
    }

    // Then: get all products (optional or less critical)
    let allProducts: Product[] = [];

    try {
      const allProductsResponse = await getAllProducts();
      allProducts = allProductsResponse.data.products;
    } catch (err) {
      console.warn('Warning: Failed to load all products list', err);
      // Don't throw if it's not critical
    }

    return { product, allProducts } satisfies ProductLoaderData;

    
  } catch (err) {  
    const axiosErr = err as AxiosError<{ message?: string }>; // type it explicitly, TypeScript doesn’t know that data contains a message.

    const status = axiosErr.response?.status || 500;
    const message =
      axiosErr.response?.data?.message || axiosErr.message || 'Unknown error';

    throw new Response(message, {
      status,
      statusText: 'Loader Error',
    });
  }
}