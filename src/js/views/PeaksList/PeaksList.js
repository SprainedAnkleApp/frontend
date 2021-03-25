import React, { useEffect } from 'react';
import Peak from '../../components/PeaksList/Peak';

import styles from './PeaksList.module.css';
import { GiMountains } from 'react-icons/gi';
import usePeaks from './usePeaks';

const PeaksList = () => {
  const { peaks, getPeaks } = usePeaks();

  useEffect(() => {
    getPeaks();
  }, []);

  const currentPeaks = peaks ?? [];
  const peaksToRender = currentPeaks.map((peak) => {
    return (
      <Peak
        peakName={peak.name}
        height={peak.height}
        region={peak.region}
        about={peak.about}
        mountainRange={peak.mountainRange}
        photo={peak.photo}
        link={peak._links.self.href}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GiMountains></GiMountains>
        Korona Gór Polski
      </div>
      <div className={styles.peaksList}>{peaksToRender}</div>
    </div>
  );
};

export default PeaksList;
