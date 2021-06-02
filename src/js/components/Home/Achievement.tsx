import styles from './Achievement.module.css';
import { ProgressBar } from '../common';
import { FaMedal } from 'react-icons/fa';

import cx from 'classnames';
import React from 'react';
import { Achievement as AchievementType } from '../../models/interfaces';

export type AchievementProps = {
  className: string;
  achievement: AchievementType;
};

const Achievement = ({ className, achievement }: AchievementProps) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <FaMedal className={styles.icon} size={35} color="#ffd700" />
      <span className={styles.name}>{achievement.achievementTitle}</span>
      <ProgressBar
        className={styles.progressBar}
        backgroundColor="#7A7A7A"
        percentage={Math.round(
          (achievement.progress / achievement.toComplete) * 100
        )}
        completed={achievement.completed}
      />
    </div>
  );
};

export default Achievement;
