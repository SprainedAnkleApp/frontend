import React from 'react';
import { Icon } from '../common';
import styles from './UserInfo.module.css';

export type UserInfoProps = {
  key?: number | string;
  name: string;
  profilePhoto: string;
  minutes: number;
};

const UserInfo = ({ name, minutes, profilePhoto, key }: UserInfoProps) => {
  return (
    <div className={styles.wrapper} key={key}>
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
