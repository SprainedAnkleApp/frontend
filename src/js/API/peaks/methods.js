import axios from 'axios';
import authHeader from '../auth/methods';
import { getPeaksUrl, getPeakCompletionUrl } from './urls';

export const getPeaks = async () => {
  return axios.get(getPeaksUrl(), { headers: authHeader() }).then(
    (response) => {
      return response.data ?? [];
    },
    (error) => {
      console.log(error);
    }
  );
};

export const getPeak = async (id) => {
  return getPeaks().then((value) => {
    return Object.values(value).find((peak) => parseInt(id) === parseInt(peak.id));
  });
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
