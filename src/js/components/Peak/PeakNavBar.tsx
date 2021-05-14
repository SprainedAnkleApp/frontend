import cx from 'classnames';

import styles from './PeakNavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

type statesType = {
  [name: string]: number;
};

const states: statesType = {
  description: 1,
  map: 2,
  posts: 3,
};

const PeakNavBar = ({ id }: { id: number }) => {
  const location = useLocation();

  const getNavBarState = () => {
    const params = location.pathname.split('/');
    return states[params[3]] ?? states.description;
  };

  return (
    <div className={styles.navigation}>
      <Link to={`/peaks/${id}`} className={styles.navbarItem}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.description,
          })}
        >
          Description
        </div>
      </Link>

      <Link to={`/peaks/${id}/map`} className={styles.navbarItem}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.map,
          })}
        >
          Map
        </div>
      </Link>

      <Link to={`/peaks/${id}/posts`} className={styles.navbarItem}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.posts,
          })}
        >
          Posts
        </div>
      </Link>
    </div>
  );
};

export default PeakNavBar;
