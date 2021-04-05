import { useState } from 'react';
import axios from 'axios';
import authHeader from '../../API/auth/methods';

const usePeaks = () => {
  const [peaks, setPeaks] = useState(null);

  const getPeaks = async () => {
    axios.get(`${process.env.REACT_APP_API_URL}api/public/peaks`, { headers: authHeader() }).then(
      (response) => {
        console.log(response.data);
        // TODO - to remove if photo will be in database
        const peaks = (response.data ?? []).map((peak) => {
          peak['photo'] =
            'https://images.unsplash.com/photo-1562878716-48b7542721e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

          return peak;
        });
        setPeaks(peaks);
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
