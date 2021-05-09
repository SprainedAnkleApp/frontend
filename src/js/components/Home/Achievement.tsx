import styles from './Achievement.module.css';
import { Icon, ProgressBar } from '../common';

import cx from 'classnames';
import React from 'react';

export type AchievementProps = {
  className: string;
  url: string;
  name: string;
  progress: number;
};

const Achievement = ({ className, url, name, progress }: AchievementProps) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <Icon className={styles.icon} url={url} variant="l" />
      <span className={styles.name}>{name}</span>
      <ProgressBar
        className={styles.progressBar}
        backgroundColor="#7A7A7A"
        percentage={Math.round(progress * 100)}
      />
    </div>
  );
};

export default Achievement;
