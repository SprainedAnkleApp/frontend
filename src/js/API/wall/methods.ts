import { getPostsUrl, getPaginatedPostsUrl, createNewPostUrl } from './urls';
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
    const pagePostsUrl = getPaginatedPostsUrl(page, pageSize);
    const response = await axios.get(pagePostsUrl, {
      headers: authHeader(),
    });
    return {
      pages: response.data.totalPages ?? 0,
      data: response.data.content ?? [],
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createNewPost = async (content: string): Promise<void> => {
  await axios.post(
    createNewPostUrl(),
    {
      content: content,
    },
    {
      headers: authHeader(),
    }
  );
};
