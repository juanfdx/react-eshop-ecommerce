// INTERFACES
import type { AxiosError } from 'axios';
// SERVICES
import { getAllProducts, getCategories } from '../services/product.mock.service';


export const homeLoader = async () => {

  try {

    const [allRes, catRes] = await Promise.all([
      getAllProducts(), 
      getCategories()          
    ]);

    return {
      products: allRes.data.products,
      categories: catRes.data.categories
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