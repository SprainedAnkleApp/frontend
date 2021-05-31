import styles from './PeakDescription.module.css';
import React from 'react';
import { Peak } from '../../models/interfaces';
import PeakStatistics from './PeakStatistics';

export type PeakDescriptionProps = {
  peak: Peak;
  showForm: boolean;
};

const PeakDescription = ({ peak }: PeakDescriptionProps) => {
  return (
    <div className={styles.peakDescription}>
      <p className={styles.about}>{peak.about}</p>
      <h3 className={styles.descriptionHeader}>Description</h3>
      <p>Wysokość: {peak.height} m n.p.m.</p>
      <p>Województwo: {peak.region}</p>
      <p>Pasmo górskie: {peak.mountainRange}</p>
      <PeakStatistics peakId={peak.id} />
    </div>
  );
};

export default PeakDescription;
