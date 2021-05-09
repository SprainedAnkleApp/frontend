import { Achievement } from '.';
import { User } from '../../models/interfaces';

import styles from './Achievements.module.css';
import React from 'react';

// TODO finish achievements
const Achievements = ({ user }: { user: User }) => {
  const achievements = [
    { url: user.profilePhoto, name: 'Mock_list_1', progress: 33 / 99 },
    { url: user.profilePhoto, name: 'Mock_list_2', progress: 79 / 99 },
  ].map((achievement) => (
    <Achievement
      key={achievement.name}
      {...achievement}
      className={styles.achievement}
    />
  ));
  return (
    <>
      <Achievement
        url={user.profilePhoto}
        name="highlighted"
        progress={1 / 3}
        className={styles.achievement}
      />
      <div className={styles.wrapper}>
        <div className={styles.title}>Achievements</div>
        <div className={styles.achievements}>{achievements}</div>
      </div>
    </>
  );
};

export default Achievements;
