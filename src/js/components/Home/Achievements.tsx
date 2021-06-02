import { Achievement } from '.';
import { Achievement as AchievementType } from '../../models/interfaces';

import styles from './Achievements.module.css';
import React, { useEffect, useState } from 'react';
import { getAchievementsShort } from '../../API/achievements/methods';

const toAchievementComponent = (achievement: AchievementType) => {
  return (
    <Achievement
      key={achievement.achievementTitle}
      achievement={achievement}
      className={styles.achievement}
    />
  );
};

const Achievements = () => {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await getAchievementsShort();
        setAchievements(data);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    fetchAchievements();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Osiągnięcia</div>
      <div className={styles.achievements}>
        {achievements.map(toAchievementComponent)}
      </div>
    </div>
  );
};

export default Achievements;
