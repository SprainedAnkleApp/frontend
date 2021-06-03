import { User } from '../../models/interfaces';
import { getPendingFriendsPaginatedUrl, getFriendsUrl } from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';

export const getFriends = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: User[] }> => {
  try {
    const pagePostsUrl = getFriendsUrl(page, pageSize);
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

export const getPendingFriendsPaginated = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: User[] }> => {
  try {
    const pagePostsUrl = getPendingFriendsPaginatedUrl(page, pageSize);
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
