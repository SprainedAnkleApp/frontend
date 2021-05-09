import React, { useEffect, useState } from 'react';
import Peak from '../../components/PeaksList/Peak';

import styles from './PeaksList.module.css';
import { GiMountains } from 'react-icons/gi';
import { getPeaks } from '../../API/peaks/methods';
import { Peak as PeakType } from '../../models/interfaces';

const PeaksList = () => {
  const [peaksData, setPeaksData] = useState<PeakType[]>([]);

  useEffect(() => {
    const fetchPeaks = async () => {
      const peaks = await getPeaks();
      setPeaksData(Array.isArray(peaks) ? peaks : []);
    };
    fetchPeaks();
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
