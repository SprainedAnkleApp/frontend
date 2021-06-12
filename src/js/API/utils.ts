import axios from 'axios';
import authHeader from './auth/methods';

export const makePaginatedRequest = async <T>(
  url: string
): Promise<{ pages: number; data: T[] }> => {
  const response = await axios.get<{ totalPages: number; content: T[] }>(url, {
    headers: authHeader(),
  });
  return {
    pages: response.data.totalPages ?? 0,
    data: response.data.content ?? [],
  };
};
