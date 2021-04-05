import { useState } from 'react';
import axios from 'axios';
import authHeader from '../../API/auth/methods';

const usePeaks = () => {
  const [peaks, setPeaks] = useState(null);

  const getPeaks = async () => {
    axios.get(`${process.env.REACT_APP_API_URL}api/public/peaks`, { headers: authHeader() }).then(
      (response) => {
        setPeaks(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return {
    peaks,
    getPeaks,
  };
};

export default usePeaks;
