import { User } from '../../models/interfaces';
import {
  getPendingFriendsPaginatedUrl,
  getFriendsUrl,
  getUsersFriendsUrl,
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

type UserWithData = User & {
  extraData: string;
};

export const getPendingFriendsPaginated = (pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: UserWithData[] }> => {
  const pendingFriendsPaginatedUrl = getPendingFriendsPaginatedUrl(
    page,
    pageSize
  );
  const response = await makePaginatedRequest(pendingFriendsPaginatedUrl);
  type apiResponse = {
    user: User;
    sentDate: string;
  }[];

  const userWithExtraData = (response.data as apiResponse).map((dataPiece) => ({
    ...dataPiece.user,
    extraData: dataPiece.sentDate,
  }));
  return {
    pages: response.pages,
    data: userWithExtraData,
  };
};

export const acceptFriendship = async (userId: number): Promise<void> => {
  try {
    await axios.post(acceptFriendUrl(userId), {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const rejectFriendship = async (userId: number): Promise<void> => {
  try {
    await axios.post(rejectFriendUrl(userId), {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addFriendship = async (userId: number): Promise<void> => {
  try {
    await axios.post(addFriendUrl(userId), {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUsersFriends = (userId: string, pageSize: number) => async (
  page: number
): Promise<{ pages: number; data: User[] }> => {
  try {
    const pageUsersFriendsUrl = getUsersFriendsUrl(userId, page, pageSize);
    const response = await axios.get(pageUsersFriendsUrl, {
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
