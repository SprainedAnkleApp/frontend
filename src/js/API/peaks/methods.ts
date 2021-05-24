import axios, { AxiosResponse } from 'axios';
import authHeader from '../auth/methods';
import {
  getPeaksUrl,
  getPeakUrl,
  getPeakCompletionUrl,
  getFirstConquerorUrl,
  getPeakTotalCompletionsUrl,
} from './urls';
import { Peak, PeakCompletion, User } from '../../models/interfaces';

export const getPeaks = async (): Promise<Peak[]> => {
  try {
    const response: AxiosResponse<Peak[]> = await axios.get<Peak[]>(
      getPeaksUrl(),
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getPeak = async (id: string): Promise<Peak | undefined> => {
  try {
    const response: AxiosResponse<
      Peak | undefined
    > = await axios.get(getPeakUrl(id), { headers: authHeader() });
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
    const response: AxiosResponse<
      PeakCompletion | undefined
    > = await axios.post(
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

export const getFirstConqueror = async (
  peakId: string
): Promise<User | undefined> => {
  try {
    const response: AxiosResponse<User | undefined> = await axios.get(
      getFirstConquerorUrl(peakId),
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

export const getPeakTotalCompletions = async (
  peakId: string
): Promise<number | undefined> => {
  try {
    const response: AxiosResponse<number | undefined> = await axios.get(
      getPeakTotalCompletionsUrl(peakId),
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
