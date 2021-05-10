import { useEffect, useState } from 'react';
import { Achievement } from '.';
import { getAchievements } from '../../API/achievements/methods';

import styles from './Achievements.module.css';

const toAchievementComponent = (achievement) => {
  return <Achievement {...achievement} className={styles.achievement} />;
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    getAchievements().then((result) => {
      setAchievements(result.map(toAchievementComponent));
    });
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Achievement name="highlighted" progress={1 / 3} className={styles.achievement} />
        <div className={styles.title}>Achievements</div>
        <div className={styles.achievements}>{achievements}</div>
      </div>
    </>
  );
};

export default Achievements;
