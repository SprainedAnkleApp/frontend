import axios from 'axios';
import authHeader from '../auth/methods';
import {
  getPeaksUrl,
  getPeakUrl,
  getPeakCompletionUrl,
  getFirstConquerorUrl,
  getNumberOfPeakConquerorsUrl,
  getPeakAverageTimeCompletionUrl,
  getPeakPostsUrl,
} from './urls';
import { Peak, PeakCompletion, Post, User } from '../../models/interfaces';

export const getPeaks = async (): Promise<Peak[]> => {
  try {
    const response = await axios.get<Peak[]>(getPeaksUrl(), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getPeak = async (id: string): Promise<Peak | undefined> => {
  try {
    const response = await axios.get<Peak>(getPeakUrl(id), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const completeThePeak = async (
  peakId: string,
  time: number
): Promise<PeakCompletion | undefined> => {
  try {
    const response = await axios.post(
      getPeakCompletionUrl(),
      {
        peakId: peakId,
        time: time,
      },
      { headers: authHeader() }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// TODO remove after changes on backend
export const getFirstConqueror = async (
  peakId: string
): Promise<User | undefined> => {
  try {
    const response = await axios.get<User>(getFirstConquerorUrl(peakId), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getLastConqueror = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  peakId: string
): Promise<User | undefined> => {
  try {
    const user: User = {
      id: 2,
      firstName: 'Adam',
      lastName: 'Nowak',
      profilePhoto: 'https://i.imgur.com/VNNp6zWb.jpg',
      email: 'anowak@mail.com',
      login: 'anowak',
    };
    return user;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getNumberOfPeakConquerors = async (
  peakId: string
): Promise<number | undefined> => {
  try {
    const response = await axios.get<number>(
      getNumberOfPeakConquerorsUrl(peakId),
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getPeakAverageTimeCompletion = async (
  peakId: string
): Promise<number | undefined> => {
  try {
    const response = await axios.get<number>(
      getPeakAverageTimeCompletionUrl(peakId),
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getPeakPosts = async (peakId: string): Promise<Post[]> => {
  try {
    const response = await axios.get(getPeakPostsUrl(peakId), {
      headers: authHeader(),
    });
    return response.data.content;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPeakPostsPaginated = (
  peakId: string,
  pageSize: number
) => async (page: number): Promise<{ pages: number; data: Post[] }> => {
  try {
    const pagePeakPostsUrl =
      getPeakPostsUrl(peakId) + `?pageNumber=${page}&pageSize=${pageSize}`;
    const response = await axios.get(pagePeakPostsUrl, {
      headers: authHeader(),
    });
    return (
      {
        pages: response.data.totalPages,
        data: response.data.content,
      } ?? []
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
