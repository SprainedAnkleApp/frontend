import axios from 'axios';
import authHeader from '../auth/methods';
import {
  getPeaksUrl,
  getPeakUrl,
  getPeakCompletionUrl,
  getFirstConquerorUrl,
  getNumberOfPeakConquerorsUrl,
  getPeakAverageTimeCompletionUrl,
} from './urls';
import { Peak, PeakCompletion, User } from '../../models/interfaces';

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
