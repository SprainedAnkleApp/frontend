import { KebabMenu, Icon } from '../common';
import cx from 'classnames';

import styles from './UserInfo.module.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import '@szhsin/react-menu/dist/index.css';
import { userContext } from '../../contexts/CurrentUser';

const UserInfo = () => {
  const { user } = useContext(userContext);
  const location = useLocation<Location>();

  console.log(user.profilePhoto);
  if (!user) return null;
  return (
    <Link to={'/profile/' + user.id} className={styles.wrapper}>
      <div
        className={cx([styles.wrapper, styles.selectionWrapper], {
          [styles.selected]: location.pathname.split('/')[1] === 'profile',
        })}
      >
        <Icon url={user.profilePhoto} />
        <div className={styles.userName}>
          {user.firstName + ' ' + user.lastName}
        </div>
      </div>
    </Link>
  );
};

export default UserInfo;
