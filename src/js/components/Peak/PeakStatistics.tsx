import React from 'react';
import { PeakCompletion, Statistics } from '../../models/interfaces';
import styles from './PeakStatistics.module.css';
import UserInfo from './UserInfo';

export type PeakStatisticsProps = {
  statistics: Statistics;
  completed: boolean;
  completionTime: number;
};

const PeakStatistics = ({
  statistics,
  completed,
  completionTime,
}: PeakStatisticsProps) => {
  return (
    <>
      <h3 className={styles.statisticsHeader}>Statystyki</h3>
      {completed && <p>Twój czas zdobycia szczytu: {completionTime} min</p>}
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
          {statistics.completion_latest.map(
            (peakCompletion: PeakCompletion) => {
              return (
                <UserInfo
                  profilePhoto={peakCompletion.user.profilePhoto}
                  name={
                    peakCompletion.user.firstName +
                    ' ' +
                    peakCompletion.user.lastName
                  }
                  minutes={peakCompletion.completionTime}
                  key={peakCompletion.id.userId}
                />
              );
            }
          )}
        </>
      )}
    </>
  );
};

export default PeakStatistics;
