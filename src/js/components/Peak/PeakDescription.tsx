import styles from './PeakDescription.module.css';
import React from 'react';
import { Peak } from '../../models/interfaces';
import { SubmitButton } from '../common';
import { completeThePeak } from '../../API/peaks/methods';

export type PeakDescriptionProps = {
  peak: Peak;
};

const PeakDescription = ({ peak }: PeakDescriptionProps) => {
  const onClick = () => {
    completeThePeak(peak.id, 3000).then((peakCompletion) =>
      console.log(peakCompletion)
    );
  };

  return (
    <div className={styles.peakDescription}>
      <p className={styles.about}>{peak.about}</p>
      <h3 className={styles.descriptionHeader}>Description</h3>
      <p>Wysokość: {peak.height} m n.p.m.</p>
      <p>Województwo: {peak.region}</p>
      <p>Pasmo górskie: {peak.mountainRange}</p>
      <div className={styles.buttonBox}>
        <SubmitButton
          onClick={onClick}
          text="Zaznacz jako zdobyty"
          className={styles.reachPeakButton}
        />
      </div>
    </div>
  );
};

export default PeakDescription;
