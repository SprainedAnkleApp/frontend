import styles from './Achievement.module.css';
import { FaMedal } from 'react-icons/fa';

import cx from 'classnames';
import React from 'react';
import { Achievement as AchievementType } from '../../../models/interfaces';
import ProgressBar from '@ramonak/react-progress-bar';

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
        completed={
          achievement.completed
            ? 'Ukończone'
            : Math.round((achievement.progress / achievement.toComplete) * 100)
        }
        bgColor={'var(--gray)'}
        baseBgColor={'var(--lighter-gray)'}
        labelAlignment={'center'}
      />
    </div>
  );
};

export default Achievement;
