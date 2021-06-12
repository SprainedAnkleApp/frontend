import { User, ExtendedMessage } from '../../models/interfaces';
import { getMessagesPaginatedUrl } from './urls';
import { makePaginatedRequest } from '../utils';

export const getMessagesPaginated = (
  userId: number,
  pageSize: number
) => async (
  page: number
): Promise<{ pages: number; data: ExtendedMessage[] }> => {
  const messageUrl = getMessagesPaginatedUrl(page, pageSize, userId);
  const response = await makePaginatedRequest<{
    sender: User;
    message: string;
    id: number;
  }>(messageUrl);
  return {
    pages: response.pages,
    data: response.data.map((record) => ({
      id: record.id,
      senderId: record.sender.id,
      content: record.message,
    })),
  };
};
