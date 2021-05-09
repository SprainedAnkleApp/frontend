import { getCurrentUserUrl } from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';
import { User } from '../../models/interfaces';

// TODO fix this function
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await axios.get<User[]>(getCurrentUserUrl(), {
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
