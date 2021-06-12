import { Message } from '../../models/interfaces';
import { getMessagesPaginatedUrl } from './urls';
import { makePaginatedRequest } from '../utils';

export const getMessagesPaginated = (
  userId: number,
  pageSize: number
) => async (page: number): Promise<{ pages: number; data: Message[] }> => {
  const messageUrl = getMessagesPaginatedUrl(userId, page, pageSize);
  return makePaginatedRequest(messageUrl);
};
