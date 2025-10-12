import axios from '../utils/mockFetch';


export type ProductQueryParams = {
  category?: string;
  brand?: string;
  min_price?: string | number;
  max_price?: string | number;
  memory?: string;
  size?: string;
  color?: string;
};


/*==================================================
  GET ALL PRODUCTS 
===================================================*/
export const getAllProducts = () => {
  return axios.get('/api/products/all');
};

/*==================================================
  GET ALL FILTERED PRODUCTS 
===================================================*/
export const getFilteredProducts = (params?: ProductQueryParams) => {
  return axios.get('/api/products', {
    params,
  });
}

/*========================================================
  GET PRODUCT BY SLUG
========================================================*/
export const getProductBySlug = (slug: string) => {
  return axios.get(`/api/products/${slug}`);;
}
  
/*==================================================
  GET CATEGORIES 
===================================================*/
export const getCategories = () => {
  return axios.get('/api/categories');
};