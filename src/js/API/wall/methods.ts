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
  console.log(makePaginatedRequest(pagePostsUrl));
  return makePaginatedRequest(pagePostsUrl);
};

export const createNewPost = async (content: string): Promise<void> => {
  await axios.post(
    createNewPostUrl(),
    { content: content },
    {
      headers: authHeader(),
    }
  );
};

export const createNewPostWithPhoto = async (
  content: string,
  file: File
): Promise<void> => {
  const body = new FormData();
  body.append('content', content);
  body.append('file', file);
  await axios.post(createNewPhotoPostUrl(), body, {
    headers: authHeader(),
  });
};
