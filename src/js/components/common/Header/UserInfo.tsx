import { KebabMenu, Icon } from '..';
import cx from 'classnames';

import styles from './UserInfo.module.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { userContext } from '../../../contexts/CurrentUser';

const UserInfo = () => {
  const { user } = useContext(userContext);
  const location = useLocation<Location>();

  if (!user) return null;
  return (
    <Link to={'/profile'} className={styles.wrapper}>
      <div
        className={cx([styles.wrapper, styles.selectionWrapper], {
          [styles.selected]: location.pathname.split('/')[1] === 'profile',
        })}
      >
        <Icon url={user.profilePhoto} />
        <div className={styles.userName}>{user.login}</div>
      </div>
      <div>
        <KebabMenu className={styles.kebabMenu} />
      </div>
    </Link>
  );
};

export default UserInfo;
