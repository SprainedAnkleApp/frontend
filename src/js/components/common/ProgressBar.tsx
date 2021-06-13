import styles from './ProgressBar.module.css';

import cx from 'classnames';
import React from 'react';

export type ProgressBarProps = {
  className?: string;
  backgroundColor: string;
  progress: number;
  toComplete: number;
  completed?: boolean;
};

const ProgressBar = ({
  className,
  backgroundColor,
  progress,
  toComplete,
  completed,
}: ProgressBarProps) => {
  const percentage = Math.round((progress / toComplete) * 100);
  const containerStyles = {
    backgroundColor: 'var(--lighter-gray)',
  };
  const fillerStyles = {
    width: `${completed ? 100 : percentage}%`,
    backgroundColor: backgroundColor,
  };

  const color = {
    color: percentage < 60 ? 'var(--darkest-gray)' : 'white',
  };

  return (
    <div className={cx(styles.wrapper, className)} style={containerStyles}>
      <div className={styles.filler} style={fillerStyles}></div>
      <span className={styles.label} style={color}>
        {completed ? 'Ukończone' : `${progress}/${toComplete}`}
      </span>
    </div>
  );
};

export default ProgressBar;
