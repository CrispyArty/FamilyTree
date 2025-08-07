import axios from 'axios';
import { apiRootUrl } from '@/constants';

export const api = axios.create({
  baseURL: apiRootUrl,
  withCredentials: process.env.NODE_ENV === 'production',
});
