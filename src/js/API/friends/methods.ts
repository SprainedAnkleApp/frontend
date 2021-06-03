import { User } from '../../models/interfaces';
import {
  getPendingFriendsPaginatedUrl,
  getFriendsUrl,
  acceptFriendUrl,
  rejectFriendUrl,
  addFriendUrl,
} from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { makePaginatedRequest } from '../utils';

export const getFriends = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: User[] }> => {
  const friendsUrl = getFriendsUrl(page, pageSize);
  return makePaginatedRequest(friendsUrl);
};

export const getPendingFriendsPaginated = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: User[] }> => {
  const pendingFriendsPaginatedUrl = getPendingFriendsPaginatedUrl(
    page,
    pageSize
  );
  return makePaginatedRequest(pendingFriendsPaginatedUrl);
};

export const acceptFriendship = async (userId: number): Promise<void> => {
  try {
    await axios.get(acceptFriendUrl(userId), {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const rejectFriendship = async (userId: number): Promise<void> => {
  try {
    await axios.get(rejectFriendUrl(userId), {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addFriendship = async (userId: number): Promise<void> => {
  try {
    await axios.get(addFriendUrl(userId), {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
