import cx from 'classnames';
import styles from './ProfileNavBar.module.css';
import React from 'react';
import { Card } from '../../common';
import { Link, useLocation } from 'react-router-dom';

export type ProfileNavBarProps = {
  userId: string;
};

const ProfileNavBar = ({ userId }: ProfileNavBarProps) => {
  const location = useLocation<Location>();

  return (
    <div className={styles.stickyCard}>
      <Card.Card>
        <div className={styles.navBar}>
          <Link to={'./posts'} className={styles.posts}>
            <div
              className={cx([styles.tabText], {
                [styles.selected]:
                  location.pathname.split('/').pop() === 'posts',
              })}
            >
              Posts
            </div>
          </Link>
          <Link to={'./achievements'} className={styles.achievements}>
            <div
              className={cx([styles.tabText], {
                [styles.selected]:
                  location.pathname.split('/').pop() === 'achievements',
              })}
            >
              Achievements
            </div>
          </Link>
          <Link to={'./friends'} className={styles.friends}>
            <div
              className={cx([styles.tabText], {
                [styles.selected]:
                  location.pathname.split('/').pop() === 'friends',
              })}
            >
              Friends
            </div>
          </Link>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileNavBar;
