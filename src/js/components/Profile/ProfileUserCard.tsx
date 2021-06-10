import React from 'react';
import styles from './ProfileUserCard.module.css';
import { Card } from '../common';

export type ProfileUserCardProps = {
  profileUserName: string;
  profilePhoto: string | undefined;
  backgroundPhoto: string | undefined;
};

const ProfileUserCard = ({
  profileUserName,
  profilePhoto,
  backgroundPhoto,
}: ProfileUserCardProps) => {
  return (
    <div className={styles.profileUserCard}>
      <Card.Card className={styles.card}>
        <div className={styles.upperContainer}>
          <div className={styles.backgroundImg}>
            <img src={backgroundPhoto} className={styles.backgroundImg} />
          </div>
          <div className={styles.profileImg}>
            <img src={profilePhoto} className={styles.profileImg} />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.userNameWrapper}>
            <p className={styles.userName}>{profileUserName}</p>
          </div>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileUserCard;
