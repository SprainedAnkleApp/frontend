import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './PeakDetails.module.css';
import { getPeak, completeThePeak } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';
import { SubmitButton } from '../../components/common';

const PeakDetails = () => {
  const { id } = useParams();
  const [peakDetails, setPeakDetails] = useState({});

  useEffect(() => {
    getPeak(id).then((value) => setPeakDetails(value));
  }, []);

  const onClick = () => {
    completeThePeak(id, 3000).then((peakCompletion) => console.log(peakCompletion));
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={peakDetails.photo} alt="peak" />
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{peakDetails.name}</h1>
        <PeakDescription peak={peakDetails} key={peakDetails.name} />
        <SubmitButton onClick={onClick} text="Zaznacz jako zdobyty" />
      </div>
    </div>
  );
};

export default PeakDetails;
