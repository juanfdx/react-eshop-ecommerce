import type { LoaderFunctionArgs } from 'react-router';
// SERVICES
import { getProductBySlug } from '../services/product.mock.service';




export const productLoader = async ({ params }: LoaderFunctionArgs) => {

  const { slug } = params;

  if (!slug) {
    throw new Response('Product slug not found in URL', { status: 400 });
  }

  try {
    const response = await getProductBySlug(slug);
    const data = response.data;
    return data;

  } catch (error) {
    console.log(error);
    return { error };
  }
}