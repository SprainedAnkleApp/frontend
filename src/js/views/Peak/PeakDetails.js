import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './PeakDetails.module.css';
import usePeakDetails from './usePeakDetails';
import PeakDescription from '../../components/Peak/PeakDescription';

const PeakDetails = () => {
  const { id } = useParams();
  const { peakDetails, getPeakDetails } = usePeakDetails({ id: id });

  useEffect(() => {
    getPeakDetails();
  }, []);

  // const peakDetails = peakDetailsData ?? [];

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={peakDetails.photo} alt="peak" />
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{peakDetails.name}</h1>
        <PeakDescription peak={peakDetails} key={peakDetails.name}></PeakDescription>
      </div>
    </div>
  );
};

export default PeakDetails;
