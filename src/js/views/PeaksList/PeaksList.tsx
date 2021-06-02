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
      <div className={cx(styles.peaksList, styles.listLeft)}>
        {peaks.filter((_, index) => index % 2 === 0)}
      </div>
      <div className={cx(styles.peaksList, styles.listRight)}>
        <PeakWarning
          warningText={
            'Remember to always be careful in the mountains. Stay safe.'
          }
        />
        {peaks.filter((_, index) => index % 2 === 1)}
      </div>
    </div>
  );
};

export default PeaksList;
