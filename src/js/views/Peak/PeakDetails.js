import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './PeakDetails.module.css';
import { getPeak } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';

const PeakDetails = () => {
  const { id } = useParams();
  const [peakDetails, setPeakDetails] = useState({});

  useEffect(() => {
    getPeak(id).then((value) => setPeakDetails(value));
  }, []);

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
