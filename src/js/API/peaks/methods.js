import axios from 'axios';
import authHeader from '../auth/methods';
import { getPeaksUrl, getPeakUrl, getPeakCompletionUrl } from './urls';

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
  try {
    const response = await axios.get(getPeakUrl(id), { headers: authHeader() });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
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
