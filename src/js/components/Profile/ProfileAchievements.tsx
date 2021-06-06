import React from 'react';
import styles from './ProfileAchievements.module.css';
import { Achievements } from '../RightBar/Achievements';
import { Card } from '../common';

const ProfileAchievements = () => {
  return (
    <div className={styles.achivementsWrapper}>
      <Card.Card>
        <Achievements />
      </Card.Card>
    </div>
  );
};

export default ProfileAchievements;
