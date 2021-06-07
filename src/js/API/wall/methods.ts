import {
  createNewPhotoPostUrl,
  getPostsUrl,
  getPaginatedPostsUrl,
  createNewPostUrl,
  createNewPeakPostUrl,
  getUserPaginatedPostsUrl,
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

export const getUserPostsPaginated = (
  pageSize: number,
  userId: string
) => async (page: number): Promise<{ pages: number; data: Post[] }> => {
  const pagePostsUrl = getUserPaginatedPostsUrl(page, pageSize, userId);
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

export const createNewPostWithPhotoAndPeak = async (
  content: string,
  file: File | null,
  latitude: number | null,
  longitude: number | null,
  peakId: string | null
): Promise<void> => {
  const body = new FormData();
  body.append('content', content);
  if (file) body.append('file', file);
  if (latitude && longitude) {
    body.append('latitude', latitude.toString());
    body.append('longitude', longitude.toString());
  }

  await axios.post(
    peakId
      ? createNewPeakPostUrl(peakId)
      : file
      ? createNewPhotoPostUrl()
      : createNewPostUrl(),
    file || peakId
      ? body
      : { content: content, latitude: latitude, longitude: longitude },
    {
      headers: authHeader(),
    }
  );
};
