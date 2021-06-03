import React from 'react';
import { Icon } from '../common';
import styles from './UserInfo.module.css';

export type UserInfoProps = {
  name: string;
  profilePhoto: string;
  minutes: string;
};

const UserInfo = ({ name, minutes, profilePhoto }: UserInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <Icon
        url={profilePhoto}
        variant="xs"
        className={styles.horizontalMargin}
      />
      <span>{name}</span>
      <p className={styles.horizontalMargin}>
        {' - '}
        {minutes} min
      </p>
    </div>
  );
};

export default UserInfo;
