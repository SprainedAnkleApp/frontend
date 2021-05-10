import { getUsersUrl, getUserUrl } from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { User } from '../../models/interfaces';

// TODO fix this function
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await axios.get<User[]>(getUsersUrl(), {
      headers: authHeader(),
    });
    return {
      login: response.data[0]?.login,
      profilePhoto: response.data[0]?.profilePhoto,
    };
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
