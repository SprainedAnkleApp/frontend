import React, { useEffect } from 'react';
import Peak from '../../components/PeaksList/Peak';

import styles from './PeaksList.module.css';
import { GiMountains } from 'react-icons/gi';
import usePeaks from './usePeaks';

const PeaksList = () => {
  const { peaks: peaksData, getPeaks } = usePeaks();

  useEffect(() => {
    getPeaks();
  }, []);

  const peaks = (peaksData ?? []).map((peak) => {
    return <Peak peak={peak} key={peak.name} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GiMountains></GiMountains>
        Korona Gór Polski
      </div>
      <div className={styles.peaksList}>{peaks}</div>
    </div>
  );
};

export default PeaksList;
