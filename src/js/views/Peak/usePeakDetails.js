import { useState } from 'react';
import axios from 'axios';
import authHeader from '../../API/auth/methods';

const usePeakDetails = ({ id }) => {
  const [peakDetailsData, setPeakDetailsData] = useState({});

  const getPeakDetails = () => {
    axios.get(`${process.env.REACT_APP_API_URL}api/public/peaks`, { headers: authHeader() }).then(
      (response) => {
        setPeakDetailsData(
          Object.values(response.data).find((peak) => parseInt(id) === parseInt(peak.id))
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const peakDetails = peakDetailsData ?? [];

  return {
    peakDetails,
    getPeakDetails,
  };
};

export default usePeakDetails;
