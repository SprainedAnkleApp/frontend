/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './PeakStatistics.module.css';
import UserInfo from './UserInfo';

const PeakStatistics = ({ statistics }: { statistics: any }) => {
  return (
    <>
      <h3 className={styles.statisticsHeader}>Statystyki</h3>
      {statistics.time_average !== undefined && (
        <p>Średni czas zdobycia szczytu: {statistics.time_average} min</p>
      )}
      {statistics.completion_total !== undefined && (
        <p>Liczba zdobywców: {statistics.completion_total}</p>
      )}
      Pierwszy zdobywca:
      {statistics.completion_first ? (
        <UserInfo
          profilePhoto={statistics.completion_first.user.profilePhoto}
          name={
            statistics.completion_first.user.firstName +
            ' ' +
            statistics.completion_first.user.lastName
          }
          minutes={statistics.completion_first.completionTime}
        />
      ) : (
        <span className={styles.horizontalMargin}>-</span>
      )}
      Najszybszy zdobywca:
      {statistics.time_fastest ? (
        <UserInfo
          profilePhoto={statistics.time_fastest.user.profilePhoto}
          name={
            statistics.time_fastest.user.firstName +
            ' ' +
            statistics.time_fastest.user.lastName
          }
          minutes={statistics.time_fastest.completionTime}
        />
      ) : (
        <span className={styles.horizontalMargin}>-</span>
      )}
      {statistics.completion_latest.length > 0 && (
        <>
          Ostatni zdobywcy:
          {statistics.completion_latest.map((statistic: any) => {
            return (
              <UserInfo
                profilePhoto={statistic.user.profilePhoto}
                name={statistic.user.firstName + ' ' + statistic.user.lastName}
                minutes={statistic.completionTime}
                key={statistic.id}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PeakStatistics;
