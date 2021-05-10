import { getPostsUrl } from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { Post } from '../../models/interfaces';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(getPostsUrl(), { headers: authHeader() });
    return response.data ?? [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
