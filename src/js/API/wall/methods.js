import { getPostsUrl } from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';

export const getPosts = async () => {
  try {
    const response = await axios.get(getPostsUrl(), { headers: authHeader() });
    return response.data ?? [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
