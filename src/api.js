import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const getProductList = async () => {
   return await axios.get(`${API_BASE_URL}/products`);
}