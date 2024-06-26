import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL,
});

export const fetchCategories = async () => {
  const response = await api.get<string[]>('/products/categories');
  return response.data;
};

export default api;
