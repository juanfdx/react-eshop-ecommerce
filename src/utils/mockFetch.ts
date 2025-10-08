import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
// DATA
import { products } from '../data/data-products';


const mock = new AxiosMockAdapter(axios, { delayResponse: 300 }); // 300ms delay


/*==================================================
  GET ALL PRODUCTS 
===================================================*/
mock.onGet('/api/products/all').reply(200, { products });


/*==================================================
  GET FILTERED PRODUCTS 
===================================================*/
mock.onGet('/api/products').reply(config => {
  const params = config.params || {};

  const {
    category,
    brand,
    rating,
    color, // baseColor
    memory,
    size,
    min_price,
    max_price,
    sort,
    page = 1,
    limit = 4, // default limit is 4 products per page
  } = params;


  const parsedMinPrice = min_price ? parseFloat(min_price.toString().trim()) : null;
  const parsedMaxPrice = max_price ? parseFloat(max_price.toString().trim()) : null;
  const parsedMinRating = rating ? parseFloat(rating.toString().trim()) : null;
  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  const skip = (parsedPage - 1) * parsedLimit;


  const filteredProducts = products.filter(product => {
    
    /* --- Product-level filters --- */
    if (category && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    if (brand && product.brand.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }

    if (parsedMinRating !== null && product.averageRating < parsedMinRating) {
      return false;
    }

    /* --- Variant-level filters --- */
    const hasMatchingVariant = product.variations.some(variant => {
      if (color && variant.baseColor.toLowerCase() !== color.toLowerCase()) {
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


  /* --- SORT --- */
  switch (sort) {
    case 'top_rated':
      filteredProducts.sort((a, b) => b.averageRating - a.averageRating);
      break;

    case 'price_lowest':
      filteredProducts.sort((a, b) => {
        const aMin = Math.min(...a.variations.map(v => v.price));
        const bMin = Math.min(...b.variations.map(v => v.price));
        return aMin - bMin;
      });
      break;

    case 'price_highest':
      filteredProducts.sort((a, b) => {
        const aMax = Math.max(...a.variations.map(v => v.price));
        const bMax = Math.max(...b.variations.map(v => v.price));
        return bMax - aMax;
      });
      break;

    case 'name_asc':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case 'name_desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case 'newest':
    default:
      filteredProducts.sort((a, b) => {
        const aDate = new Date(a.createdAt).getTime();
        const bDate = new Date(b.createdAt).getTime();
        return bDate - aDate; // newest first
      });
      break;
  }

  const total = filteredProducts.length;
  const numOfPages = Math.ceil(total / parsedLimit);

  // Slice for pagination
  const paginatedProducts = filteredProducts.slice(skip, skip + parsedLimit);
  
  return [
    200, 
    {
      products: paginatedProducts,
      total,
      currentPage: parsedPage,
      numOfPages,
      limit: parsedLimit,
    }
  ];
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