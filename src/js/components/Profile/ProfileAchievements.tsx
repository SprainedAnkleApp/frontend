import React from 'react';
import styles from './ProfileAchievements.module.css';
import { Achievements } from '../RightBar/Achievements';
import { Card } from '../common';

export type ProfileAchievementsProps = {
  userId: string;
};

const ProfileAchievements = ({ userId }: ProfileAchievementsProps) => {
  return (
    <div className={styles.achivementsWrapper}>
      <Card.Card>
        <Achievements userId={userId} />
      </Card.Card>
    </div>
  );
};

export default ProfileAchievements;
