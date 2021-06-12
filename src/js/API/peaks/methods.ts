import axios from 'axios';
import authHeader from '../auth/methods';
import {
  getPeaksUrl,
  getPeakUrl,
  getPeakCompletionUrl,
  getPeakPostsUrl,
  getPagePeakPostsUrl,
  getPeaksNamesUrl,
} from './urls';
import { Peak, PeakCompletion, Post } from '../../models/interfaces';
import { makePaginatedRequest } from '../utils';

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

export const getPeaksNames = async (): Promise<Peak[]> => {
  try {
    const response = await axios.get<Peak[]>(getPeaksNamesUrl(), {
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
    return [];
  }
};

export const getPeakPostsPaginated = (
  peakId: string,
  pageSize: number
) => async (page: number): Promise<{ pages: number; data: Post[] }> => {
  const peakPostsPaginatedUrl = getPagePeakPostsUrl(peakId, page, pageSize);
  return makePaginatedRequest(peakPostsPaginatedUrl);
};
