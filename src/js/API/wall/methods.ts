import { getPostsUrl, createNewPostUrl } from './urls';
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

export const getPostsPaginated = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: Post[] }> => {
  try {
    const pagePostsUrl = getPostsUrl() + `?page=${page}&size=${pageSize}`;
    const response = await axios.get(pagePostsUrl, {
      headers: authHeader(),
    });
    return response.data ?? [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createNewPost = async (content: string): Promise<void> => {
  await axios.post(createNewPostUrl(), {
    headers: authHeader(),
    body: { content },
  });
};
