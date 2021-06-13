import {
  getCurrentUserUrl,
  getUserUrl,
  getSearchUsersPaginatedUrl,
} from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { User } from '../../models/interfaces';
import { makePaginatedRequest } from '../utils';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await axios.get<User>(getCurrentUserUrl(), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (
  id: string
): Promise<User | Record<string, never>> => {
  try {
    const response = await axios.get(getUserUrl(id), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    return {};
  }
};

export const getSearchUsersPaginated = (
  pageSize: number,
  searchTerm: string
) => async (page: number): Promise<{ pages: number; data: User[] }> => {
  const searchUsersPaginatedUrl = getSearchUsersPaginatedUrl(
    page,
    pageSize,
    searchTerm
  );

  return makePaginatedRequest(searchUsersPaginatedUrl);
};
