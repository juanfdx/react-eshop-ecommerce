import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
// DATA
import { products } from '../data/data-products';


const mock = new AxiosMockAdapter(axios, { delayResponse: 300 }); // 300ms delay


/*==================================================
  GET ALL PRODUCTS 
===================================================*/
mock.onGet('/api/products').reply(200, {
  products,
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