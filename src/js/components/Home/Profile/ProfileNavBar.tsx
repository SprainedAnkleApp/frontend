import React from 'react';
import cx from 'classnames';
import styles from './ProfileNavBar.module.css';
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
              Posty
            </div>
          </Link>
          <Link to={'./achievements'} className={styles.achievements}>
            <div
              className={cx([styles.tabText], {
                [styles.selected]:
                  location.pathname.split('/').pop() === 'achievements',
              })}
            >
              Osiągnięcia
            </div>
          </Link>
          <Link to={'./friends'} className={styles.friends}>
            <div
              className={cx([styles.tabText], {
                [styles.selected]:
                  location.pathname.split('/').pop() === 'friends',
              })}
            >
              Znajomi
            </div>
          </Link>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileNavBar;
