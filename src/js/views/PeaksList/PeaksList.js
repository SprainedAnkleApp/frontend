import React, { useEffect, useState } from 'react';
import Peak from '../../components/PeaksList/Peak';

import styles from './PeaksList.module.css';
import { getPeaks } from '../../API/peaks/methods';
import PeakWarning from '../../components/PeaksList/PeakWarning';

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
      <div className={styles.peaksList}>{peaks.filter((_, index) => index % 2 === 0)}</div>
      <div className={styles.peaksList}>
        <PeakWarning warningText={'Remember to always be careful in the mountains. Stay safe.'} />
        {peaks.filter((_, index) => index % 2 === 1)}
      </div>
    </div>
  );
};

export default PeaksList;
