import styles from './ProfileUserCard.module.css';
import React from 'react';
import { Card } from '../../common';

export type ProfileUserCardProps = {
  profileUserName: string;
  profilePhoto: string | undefined;
};

const ProfileUserCard = ({
  profileUserName,
  profilePhoto,
}: ProfileUserCardProps) => {
  return (
    <div className={styles.profileUserCard}>
      <Card.Card className={styles.card}>
        <div className={styles.upperContainer}>
          <div className={styles.backgroundImg}></div>
          <div className={styles.profileImg}>
            <img src={profilePhoto} alt="icon" className={styles.photo} />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.userNameWrapper}>
            <p className={styles.userName}>{profileUserName}</p>
            <p className={styles.lvl}>Zdobywca - lvl 14</p>
          </div>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileUserCard;
