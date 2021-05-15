import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Peak.module.css';
import { Peak as PeakType } from '../../models/interfaces';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export type PeakProps = {
  peak: PeakType;
  redirectTo: string;
  className?: string;
};

const Peak = ({ peak, redirectTo, className }: PeakProps) => {
  return (
    <Link className={cx(styles.card, className)} to={redirectTo}>
      <img className={styles.photo} src={peak.photo} alt="mountain" />
      <div className={styles.peakInformation}>
        <div>
          <div className={styles.peakName}>{peak.name}</div>
          <div className={styles.peakHeight}>{peak.height} m n.p.m.</div>
        </div>
        <div className={styles.rating}>
          <AiFillStar className={styles.star} />{' '}
          <p className={styles.ratingText}>4.9/5</p>
        </div>
      </div>
    </Link>
  );
};

export default Peak;
