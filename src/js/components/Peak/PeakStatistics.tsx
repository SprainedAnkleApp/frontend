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
      {statistics.completion_first && (
        <>
          Pierwszy zdobywca:
          <UserInfo
            profilePhoto={statistics.completion_first.user.profilePhoto}
            name={
              statistics.completion_first.user.firstName +
              ' ' +
              statistics.completion_first.user.lastName
            }
            minutes={statistics.completion_first.completionTime}
          />
        </>
      )}
      {statistics.time_fastest && (
        <>
          Najszybszy zdobywca:
          <UserInfo
            profilePhoto={statistics.time_fastest.user.profilePhoto}
            name={
              statistics.time_fastest.user.firstName +
              ' ' +
              statistics.time_fastest.user.lastName
            }
            minutes={statistics.time_fastest.completionTime}
          />
        </>
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
                key={statistic.id.userId}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PeakStatistics;
