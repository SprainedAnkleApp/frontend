import { KebabMenu, Icon } from '..';

import styles from './UserInfo.module.css';
import { User } from '../../../models/interfaces';
import React from 'react';

export type UserInfoProps = {
  user: User;
};

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <Icon url={user.profilePhoto} />
      <div className={styles.userName}>{user.login}</div>
      <KebabMenu />
    </div>
  );
};

export default UserInfo;
