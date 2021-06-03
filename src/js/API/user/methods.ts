import {
  getCurrentUserUrl,
  getUserUrl,
  getSearchUsersPaginatedUrl,
} from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { User } from '../../models/interfaces';

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

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await axios.get(getUserUrl(id), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSearchUsersPaginated = (
  pageSize: number,
  searchTerm: string
) => async (page: number): Promise<{ pages: number; data: User[] }> => {
  try {
    const pagePostsUrl = getSearchUsersPaginatedUrl(page, pageSize, searchTerm);
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
