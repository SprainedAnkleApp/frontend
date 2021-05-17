import styles from './ProfileNavBar.module.css';
import React from 'react';
import { Card } from '../../common';

export type ProfileNavBarProps = {
  className: string;
};

const ProfileNavBar = ({ className }: ProfileNavBarProps) => {
  return (
    <div className={className}>
      <Card.Card className={className}>
        <div className={styles.navBar}>
          <div className={styles.posts}>
            <p className={styles.tabText}>Posts</p>
          </div>
          <div className={styles.achievements}>
            <p className={styles.tabText}>Achievements</p>
          </div>
          <div className={styles.friends}>
            <p className={styles.tabText}>Friends</p>
          </div>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileNavBar;
