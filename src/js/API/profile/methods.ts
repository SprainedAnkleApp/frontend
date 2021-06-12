import { getProfilePaginatedPostsUrl } from './urls';
import { Post } from '../../models/interfaces';
import { makePaginatedRequest } from '../utils';

export const getProfilePostsPaginated = (
  userId: number,
  pageSize: number
) => async (page: number): Promise<{ pages: number; data: Post[] }> => {
  const pagePostsUrl = getProfilePaginatedPostsUrl(userId, page, pageSize);
  return makePaginatedRequest(pagePostsUrl);
};
