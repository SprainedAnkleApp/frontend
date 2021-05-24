import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Peak.module.css';
import { Peak as PeakType } from '../../models/interfaces';
import React from 'react';
import { TiTick, TiTimes } from 'react-icons/ti';

export type PeakProps = {
  peak: PeakType;
  redirectTo: string;
  className?: string;
  setShowForm?: () => void;
  peakDetails?: boolean;
};

const Peak = ({
  peak,
  redirectTo,
  className,
  setShowForm,
  peakDetails = false,
}: PeakProps) => {
  return (
    <div className={cx(styles.card, className)}>
      <Link className={styles.redirectLink} to={redirectTo}>
        <img className={styles.photo} src={peak.photo} alt="mountain" />
      </Link>
      <div className={styles.peakInformation}>
        <div>
          <div className={styles.peakName}>{peak.name}</div>
          <div className={styles.peakHeight}>{peak.height} m n.p.m.</div>
        </div>
      </div>
      <div
        className={cx(
          styles.reachedInfo,
          peak.completed
            ? styles.peakReachedInfo
            : peakDetails && styles.peakNotReachedInfo
        )}
        onClick={peak.completed ? void 0 : setShowForm}
      >
        {peak.completed ? (
          <TiTick className={styles.reachedIcon} />
        ) : (
          <TiTimes className={styles.reachedIcon} />
        )}
        <p className={styles.reachedText}>
          {peak.completed ? 'Reached' : 'Reach'}
        </p>
      </div>
    </div>
  );
};

export default Peak;
