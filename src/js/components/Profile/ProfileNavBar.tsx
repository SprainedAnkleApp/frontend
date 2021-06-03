import React from 'react';
import cx from 'classnames';
import styles from './ProfileNavBar.module.css';
import { Card } from '../common';
import { useLocation } from 'react-router-dom';
import { profileTabs } from '../../views/Profile/Profile';

export type ProfileNavBarProps = {
  state: profileTabs;
  setState: (choice: profileTabs) => void;
};

const ProfileNavBar = ({ state, setState }: ProfileNavBarProps) => {
  return (
    <div className={styles.stickyCard}>
      <Card.Card>
        <div className={styles.navBar}>
          <div
            className={cx([styles.tabText], {
              [styles.selected]: state === 'posts',
            })}
            onClick={() => setState('posts')}
          >
            Posty
          </div>
          <div
            className={cx([styles.tabText], {
              [styles.selected]: state === 'achievements',
            })}
            onClick={() => setState('achievements')}
          >
            Osiągnięcia
          </div>
          <div
            className={cx([styles.tabText, styles.friends], {
              [styles.selected]: state === 'friends',
            })}
            onClick={() => setState('friends')}
          >
            Znajomi
          </div>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileNavBar;
