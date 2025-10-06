import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
// DATA
import { products } from '../data/data-products';


const mock = new AxiosMockAdapter(axios, { delayResponse: 300 }); // 300ms delay


/*==================================================
  GET ALL PRODUCTS 
===================================================*/
mock.onGet('/api/products').reply(config => {
  const params = config.params || {};

  const {
    category,
    brand,
    rating,
    color,
    memory,
    size,
    min_price,
    max_price,
  } = params;

  const parsedMinPrice = min_price ? parseFloat(min_price.toString().trim()) : null;
  const parsedMaxPrice = max_price ? parseFloat(max_price.toString().trim()) : null;
  const parsedMinRating = rating ? parseFloat(rating.toString().trim()) : null;


  const filteredProducts = products.filter(product => {
    // --- Product-level filters ---
    if (category && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    if (brand && product.brand.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }

    if (parsedMinRating !== null && product.averageRating < parsedMinRating) {
      return false;
    }

    // --- Variant-level filters ---
    const hasMatchingVariant = product.variations.some(variant => {
      if (color && variant.color.toLowerCase() !== color.toLowerCase()) {
        return false;
      }

      if (memory && variant.memory.toLowerCase() !== memory.toLowerCase()) {
        return false;
      }

      if (size && variant.size.toLowerCase() !== size.toLowerCase()) {
        return false;
      }
      // OJO: 159000 pass this filter when max_price = 150000
      if (parsedMinPrice !== null && variant.price < parsedMinPrice) {
        return false;
      }

      if (parsedMaxPrice !== null && Number(variant.price) > parsedMaxPrice) {
        return false;
      }

      return true; // passes all filters
    });

    return hasMatchingVariant;
  });

  return [200, { products: filteredProducts }];
});



/*========================================================
  GET PRODUCT BY SLUG
========================================================*/
mock.onGet(/\/api\/products\/[\w-]+$/).reply(config => {
  const slug = config.url?.split('/').pop();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return [404, { message: 'Product not found' }];
  }

  return [200, { product }];
});



export default axios;