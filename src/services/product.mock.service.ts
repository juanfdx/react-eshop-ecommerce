import axios from '../utils/mockFetch';



/*==================================================
  GET ALL PRODUCTS 
===================================================*/
export const getAllProducts = () => axios.get('/api/products');


/*========================================================
  GET PRODUCT BY SLUG
========================================================*/
export const getProductBySlug = (slug: string) => {
  return axios.get(`/api/products/${slug}`);;
}
  
