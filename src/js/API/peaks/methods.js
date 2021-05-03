import axios from 'axios';
import authHeader from '../auth/methods';
import { getPeaksUrl, getPeakCompletionUrl } from './urls';

export const getPeaks = async () => {
  try {
    const response = await axios.get(getPeaksUrl(), { headers: authHeader() });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPeak = async (id) => {
  const peaks = await getPeaks();
  return Object.values(peaks).find((peak) => parseInt(id) === parseInt(peak.id));
};

export const completeThePeak = async (peakId, time) => {
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
