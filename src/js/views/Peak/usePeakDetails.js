import { useState } from 'react';
import axios from 'axios';
import authHeader from '../../API/auth/methods';

const usePeakDetails = ({ id }) => {
  const [peakDetailsData, setPeakDetailsData] = useState({});

  const getPeakDetails = () => {
    axios.get(`${process.env.REACT_APP_API_URL}api/public/peaks`, { headers: authHeader() }).then(
      (response) => {
        console.log(response.data);
        let peak = Object.values(response.data).find((peak) => parseInt(id) === parseInt(peak.id));
        // TODO - to remove if photo will be in database
        peak['photo'] =
          'https://images.unsplash.com/photo-1562878716-48b7542721e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

        setPeakDetailsData(peak);
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
