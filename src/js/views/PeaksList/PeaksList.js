import React, { useEffect, useState } from 'react';
import Peak from '../../components/PeaksList/Peak';

import styles from './PeaksList.module.css';
import { GiMountains } from 'react-icons/gi';
import { getPeaks } from '../../API/peaks/methods';

const PeaksList = () => {
  const [peaksData, setPeaksData] = useState([]);

  useEffect(() => {
    getPeaks().then((value) => setPeaksData(value));
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
