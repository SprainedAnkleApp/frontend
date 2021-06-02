import styles from './Achievement.module.css';
import { FaMedal } from 'react-icons/fa';

import cx from 'classnames';
import React from 'react';
import { ProgressBar } from '../../common';

export type AchievementProps = {
  className: string;
  name: string;
  progress: number;
};

const Achievement = ({ className, name, progress }: AchievementProps) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <FaMedal className={styles.icon} size={35} color="#ffd700" />
      <span className={styles.name}>{name}</span>
      <ProgressBar
        className={styles.progressBar}
        backgroundColor="#7A7A7A"
        percentage={Math.round(progress * 100)}
        completed={progress === 1}
      />
    </div>
  );
};

export default Achievement;
