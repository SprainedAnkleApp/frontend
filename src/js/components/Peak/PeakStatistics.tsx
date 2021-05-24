import React from 'react';
import { User } from '../../models/interfaces';
import styles from './PeakStatistics.module.css';

export type PeakStatisticsProps = {
  firstConqueror: User | undefined;
  numberOfPeakConquerors: number | undefined;
};
const PeakStatistics = ({
  firstConqueror,
  numberOfPeakConquerors,
}: PeakStatisticsProps) => {
  return (
    <>
      <h3 className={styles.statisticsHeader}>Statistics</h3>
      <div className={styles.wrapper}>
        Pierwszy zdobywca:
        {firstConqueror ? (
          <>
            <img
              src={firstConqueror.profilePhoto}
              alt=""
              className={styles.userPhoto}
            />
            <span>
              {firstConqueror.firstName} {firstConqueror.lastName}
            </span>
          </>
        ) : (
          <span className={styles.noFirstConqueror}>-</span>
        )}
      </div>
      <p>Liczba zdobywców: {numberOfPeakConquerors}</p>
    </>
  );
};

export default PeakStatistics;
