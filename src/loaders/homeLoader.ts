// INTERFACES
import type { AxiosError } from 'axios';
import type { Product } from '../interfaces/product.interface';
import type { Category } from '../data/data-categories';
// SERVICES
import { getAllProducts, getCategories } from '../services/product.mock.service';

type HomeLoaderData = {
  products: Product[];
  categories: Category[];
};


export const homeLoader = async (): Promise<HomeLoaderData> => {

  try {

    const [allRes, catRes] = await Promise.all([
      getAllProducts(), 
      getCategories()          
    ]);

    return {
      products: allRes?.data?.products ?? [], // avoid returning undefined
      categories: catRes?.data?.categories ?? []
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