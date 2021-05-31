import styles from './PeakDescription.module.css';
import React from 'react';
import { Peak, Statistics } from '../../models/interfaces';
import PeakStatistics from './PeakStatistics';

export type PeakDescriptionProps = {
  peak: Peak;
  statistics: Statistics;
};

const PeakDescription = ({ peak, statistics }: PeakDescriptionProps) => {
  return (
    <div className={styles.peakDescription}>
      <p className={styles.about}>{peak.about}</p>
      <h3 className={styles.descriptionHeader}>Opis</h3>
      <p>Wysokość: {peak.height} m n.p.m.</p>
      <p>Województwo: {peak.region}</p>
      <p>Pasmo górskie: {peak.mountainRange}</p>
      <PeakStatistics statistics={statistics} />
    </div>
  );
};

export default PeakDescription;
