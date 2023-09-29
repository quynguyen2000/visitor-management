import axios from 'axios';

export const authorizeClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});
