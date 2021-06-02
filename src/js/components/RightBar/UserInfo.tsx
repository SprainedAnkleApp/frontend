import { Icon } from '../common';

import styles from './UserInfo.module.css';
import React, { useContext } from 'react';
import { userContext } from '../../contexts/CurrentUser';

const UserInfo = () => {
  const { user } = useContext(userContext);
  if (!user) return null;
  return (
    <div className={styles.wrapper}>
      <Icon url={user.profilePhoto} />
      <div className={styles.userName}>{user.login}</div>
    </div>
  );
};

export default UserInfo;
