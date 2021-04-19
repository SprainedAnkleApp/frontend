import { getPostsUrl, getCurrentUserUrl } from './urls';
import axios from 'axios';
import authHeader from '../auth/methods';

export const getPosts = async () => {
  return axios.get(getPostsUrl(), { headers: authHeader() }).then(
    (response) => {
      return response.data ?? null;
    },
    (error) => {
      console.log(error);
    }
  );
};

export const getCurrentUser = () => {
  return axios.get(getCurrentUserUrl(), { headers: authHeader() }).then(
    (response) => {
      return {
        userName: response.data[0]?.login,
        photoUrl: response.data[0]?.profilePhoto,
      };
    },
    (error) => {
      console.log(error);
      throw error;
    }
  );
};
