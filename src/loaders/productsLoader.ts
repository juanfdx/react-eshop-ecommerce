import type { LoaderFunctionArgs } from 'react-router'
// INTERFACES
import type { AxiosError } from 'axios';
// SERVICES
import { getAllProducts, getFilteredProducts } from '../services/product.mock.service';




export const productsLoader = async ({ request }: LoaderFunctionArgs) => {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ]) 

  try {

    const [allRes, filteredRes] = await Promise.all([
      getAllProducts(),            // All products (for filters)
      getFilteredProducts(params)  // Filtered products (for the grid)
    ]);

    return {
      allProducts: allRes?.data?.products ?? [],
      filteredRes: filteredRes?.data ,
    };
    

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