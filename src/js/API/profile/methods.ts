import axios from 'axios';
import { getProfilePaginatedPostsUrl, getCurrentUserUrl } from './urls';
import { Post } from '../../models/interfaces';
import { makePaginatedRequest } from '../utils';
import authHeader from '../auth/methods';

export const getProfilePostsPaginated = (
  userId: number,
  pageSize: number
) => async (page: number): Promise<{ pages: number; data: Post[] }> => {
  const pagePostsUrl = getProfilePaginatedPostsUrl(userId, page, pageSize);
  return makePaginatedRequest(pagePostsUrl);
};

export const postProfilePhoto = async (
  file: File,
  callback: () => void
): Promise<void> => {
  const body = new FormData();
  body.append('profilePhoto', file);

  await axios.post(getCurrentUserUrl(), body, {
    headers: authHeader(),
  });
  callback();
};

export const postBackgroundPhoto = async (
  file: File,
  callback: () => void
): Promise<void> => {
  const body = new FormData();
  body.append('backgroundPhoto', file);

  await axios.post(getCurrentUserUrl(), body, {
    headers: authHeader(),
  });
  callback();
};
