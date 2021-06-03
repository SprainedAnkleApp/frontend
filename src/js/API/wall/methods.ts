import {
  createNewPhotoPostUrl,
  getPostsUrl,
  getPaginatedPostsUrl,
  createNewPostUrl,
} from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { Post } from '../../models/interfaces';
import { makePaginatedRequest } from '../utils';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(getPostsUrl(), { headers: authHeader() });
    return response.data ?? [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPostsPaginated = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: Post[] }> => {
  const pagePostsUrl = getPaginatedPostsUrl(page, pageSize);
  return makePaginatedRequest(pagePostsUrl);
};

export const createNewPost = async (
  content: string,
  file: File | null
): Promise<void> => {
  const body = new FormData();
  body.append('content', content);
  if (file) body.append('file', file);
  await axios.post(file ? createNewPhotoPostUrl() : createNewPostUrl(), body, {
    headers: authHeader(),
  });
};
