import { Achievement } from '.';
import { Achievement as AchievementType } from '../../models/interfaces';

import styles from './Achievements.module.css';
import React, { useEffect, useState } from 'react';
import { getAchievements } from '../../API/achievements/methods';

const toAchievementComponent = (achievement: AchievementType) => {
  return (
    <Achievement
      key={achievement.name}
      {...achievement}
      className={styles.achievement}
    />
  );
};

// TODO finish achievements
const Achievements = () => {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await getAchievements();
        setAchievements(data);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    fetchAchievements();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Achievement
        name="highlighted"
        progress={1 / 3}
        className={styles.achievement}
      />
      <div className={styles.title}>Osiągnięcia</div>
      <div className={styles.achievements}>
        {achievements.map(toAchievementComponent)}
      </div>
    </div>
  );
};

export default Achievements;
