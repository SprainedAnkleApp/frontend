import axios from 'axios';
import authHeader from '../auth/methods';
import { getPeaksUrl, getPeakUrl, getPeakCompletionUrl } from './urls';
import { Peak, PeakCompletion } from '../../models/interfaces';

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
    const response = await axios.get(getPeakUrl(id), { headers: authHeader() });
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
