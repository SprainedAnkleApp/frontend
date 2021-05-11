import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './PeakDetails.module.css';
import { getPeak, completeThePeak } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';
import { SubmitButton } from '../../components/common';
import { Peak as PeakType } from '../../models/interfaces';
import { Peak } from '../../components/PeaksList';

const PeakDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [peakDetails, setPeakDetails] = useState<PeakType | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchPeak = async () => {
      const value = await getPeak(id);
      setPeakDetails(value);
    };
    fetchPeak();
  }, []);

  const onClick = () => {
    completeThePeak(id, 3000).then((peakCompletion) =>
      console.log(peakCompletion)
    );
  };

  if (!peakDetails) return null;

  return (
    <div className={styles.container}>
      <Peak peak={peakDetails} redirectTo={'/peaks'} className={styles.card} />
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{peakDetails.name}</h1>
        <PeakDescription peak={peakDetails} key={peakDetails.name} />
        <SubmitButton onClick={onClick} text="Zaznacz jako zdobyty" />
      </div>
    </div>
  );
};

export default PeakDetails;
