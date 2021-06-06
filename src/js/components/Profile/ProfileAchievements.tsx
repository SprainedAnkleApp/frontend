import React, { useContext } from 'react';
import styles from './ProfileAchievements.module.css';
import { Achievements } from '../RightBar/Achievements';
import { Card } from '../common';
import { userContext } from '../../contexts/CurrentUser';

const ProfileAchievements = () => {
  const { user } = useContext(userContext);
  return (
    <div className={styles.achivementsWrapper}>
      <Card.Card>
        <Achievements userId={user.id.toString()} />
      </Card.Card>
    </div>
  );
};

export default ProfileAchievements;
