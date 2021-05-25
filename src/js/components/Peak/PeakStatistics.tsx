import React, { useEffect, useState } from 'react';
import {
  getFirstConqueror,
  getLastConqueror,
  getNumberOfPeakConquerors,
  getPeakAverageTimeCompletion,
} from '../../API/peaks/methods';
import { User } from '../../models/interfaces';
import styles from './PeakStatistics.module.css';

const PeakStatistics = ({ peakId }: { peakId: string }) => {
  const [firstConqueror, setFirstConqueror] = useState<User | undefined>(
    undefined
  );
  const [lastConqueror, setLastConqueror] = useState<User | undefined>(
    undefined
  );
  const [numberOfPeakConquerors, setNumberOfPeakConquerors] = useState<
    number | undefined
  >(undefined);
  const [averageTimeCompletion, setAverageTimeCompletion] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    const getPeakStatistics = async () => {
      setFirstConqueror(await getFirstConqueror(peakId));
      setNumberOfPeakConquerors(await getNumberOfPeakConquerors(peakId));
      setAverageTimeCompletion(await getPeakAverageTimeCompletion(peakId));
      setLastConqueror(await getLastConqueror(peakId));
    };
    getPeakStatistics();
  }, []);

  return (
    <>
      <h3 className={styles.statisticsHeader}>Statistics</h3>
      <p className={styles.wrapper}>
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
          <span className={styles.noConqueror}>-</span>
        )}
      </p>
      <p className={styles.wrapper}>
        Ostatni zdobywca:
        {lastConqueror ? (
          <>
            <img
              src={lastConqueror.profilePhoto}
              alt=""
              className={styles.userPhoto}
            />
            <span>
              {lastConqueror.firstName} {lastConqueror.lastName}
            </span>
          </>
        ) : (
          <span className={styles.noConqueror}>-</span>
        )}
      </p>
      {numberOfPeakConquerors !== undefined && (
        <p>Liczba zdobywców: {numberOfPeakConquerors}</p>
      )}
      {averageTimeCompletion !== undefined && (
        <p>Średni czas zdobycia szczytu: {averageTimeCompletion} min</p>
      )}
    </>
  );
};

export default PeakStatistics;
