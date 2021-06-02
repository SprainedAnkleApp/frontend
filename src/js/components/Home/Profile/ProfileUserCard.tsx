import styles from './ProfileUserCard.module.css';
import React from 'react';
import { Card } from '../../common';

export type ProfileUserCardProps = {
  className: string;
};

const ProfileUserCard = () => {
  return (
    <div className={styles.profileUserCard}>
      <Card.Card className={styles.card}>
        <div className={styles.upperContainer}>
          <div className={styles.backgroundImg}></div>
          <div className={styles.profileImg}></div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.userNameWrapper}>
            <p className={styles.userName}>Konrad Dębiec</p>
            <p className={styles.lvl}>Zdobywca - lvl 14</p>
          </div>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileUserCard;
