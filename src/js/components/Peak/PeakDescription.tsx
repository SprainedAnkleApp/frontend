import styles from './PeakDescription.module.css';
import React from 'react';
import { Peak } from '../../models/interfaces';
import { SubmitButton } from '../common';
import { completeThePeak } from '../../API/peaks/methods';
import PeakStatistics from './PeakStatistics';

export type PeakDescriptionProps = {
  peak: Peak;
  showForm: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  statistics: any;
};
const PeakDescription = ({
  peak,
  showForm,
  statistics,
}: PeakDescriptionProps) => {
  // TODO add form to reach peak
  const reachPeak = async (time: number) => {
    const peakCompletionResponse = await completeThePeak(peak.id, time);
    console.log(peakCompletionResponse);
  };

  return (
    <div className={styles.peakDescription}>
      <p className={styles.about}>{peak.about}</p>
      <h3 className={styles.descriptionHeader}>Opis</h3>
      <p>Wysokość: {peak.height} m n.p.m.</p>
      <p>Województwo: {peak.region}</p>
      <p>Pasmo górskie: {peak.mountainRange}</p>
      <PeakStatistics statistics={statistics} />
      {showForm && (
        <div className={styles.buttonBox}>
          <SubmitButton
            onClick={() => reachPeak(3000)}
            text="Zaznacz jako zdobyty"
            className={styles.reachPeakButton}
          />
        </div>
      )}
    </div>
  );
};

export default PeakDescription;
