import axios from 'axios';
import authHeader from '../auth/methods';
import { getPeaksUrl, getPeakCompletionUrl } from './urls';
import { Peak } from '../../models/interfaces';

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
  const peaks = await getPeaks();
  return Object.values(peaks).find(
    (peak) => parseInt(id) === parseInt(peak.id)
  );
};

// TODO finish typing this function
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const completeThePeak = async (peakId: string, time: number) => {
  return axios
    .post(
      getPeakCompletionUrl(),
      {
        peakId: peakId,
        time: time,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    });
};
