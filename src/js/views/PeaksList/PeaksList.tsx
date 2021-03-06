import React, { useEffect, useState } from 'react';
import Peak from '../../components/PeaksList/Peak';

import styles from './PeaksList.module.css';
import { getPeaks } from '../../API/peaks/methods';
import { Peak as PeakType } from '../../models/interfaces';
import PeakWarning from '../../components/PeaksList/PeakWarning';

import cx from 'classnames';

export type PeaksListProps = {
  className?: string;
};
const PeaksList = ({ className }: PeaksListProps) => {
  const [peaksData, setPeaksData] = useState<PeakType[]>([]);

  useEffect(() => {
    const fetchPeaks = async () => {
      const peaks = await getPeaks();
      setPeaksData(Array.isArray(peaks) ? peaks : []);
    };
    fetchPeaks();
  }, []);

  const peaks = (peaksData ?? []).map((peak) => {
    return (
      <Peak peak={peak} redirectTo={`/peaks/${peak.id}`} key={peak.name} />
    );
  });

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.peaksList}>
        {peaks
          .filter((_, index) => index % 2 === 0)
          .map((element) =>
            React.cloneElement(element, { className: styles.listLeft })
          )}
      </div>
      <div className={styles.peaksList}>
        <PeakWarning
          warningText={'Pamiętaj, aby zawsze być ostrożnym w górach.'}
        />
        {peaks
          .filter((_, index) => index % 2 === 1)
          .map((element) =>
            React.cloneElement(element, { className: styles.right })
          )}
      </div>
    </div>
  );
};

export default PeaksList;
