import { Achievement } from '.';
import { Achievement as AchievementType } from '../../../models/interfaces';

import styles from './Achievements.module.css';
import React, { useEffect, useState } from 'react';
import {
  getAchievements,
  getAchievementsShort,
} from '../../../API/achievements/methods';

const toAchievementComponent = (achievement: AchievementType) => {
  return (
    <Achievement
      key={achievement.achievementTitle}
      achievement={achievement}
      className={styles.achievement}
    />
  );
};

function cmpAchivements(a: AchievementType, b: AchievementType) {
  if (a.progress / a.toComplete < b.progress / b.toComplete) {
    return 1;
  }
  if (a.progress / a.toComplete > b.progress / b.toComplete) {
    return -1;
  }
  return 0;
}

const Achievements = ({ userId }: { userId?: string }) => {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = (
          userId ? await getAchievements(userId) : await getAchievementsShort()
        ).sort(cmpAchivements);

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
