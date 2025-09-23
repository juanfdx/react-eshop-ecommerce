import { getProductBySlug } from '../services/product.mock.service';




export const productLoader = async ({ params }: { params: { slug: string }}) => {

  try {
    const response = await getProductBySlug(params.slug);
    const data = response.data;
    return data;

  } catch (error) {
    console.log(error);
    return { error };
  }
}