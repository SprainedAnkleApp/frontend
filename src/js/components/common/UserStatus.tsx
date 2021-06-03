import styles from './UserStatus.module.css';
import cx from 'classnames';
import React from 'react';

export type UserStatus = {
  status: 'online' | 'offline';
  className?: string;
};

const UserStatus = ({ status, className }: UserStatus) => {
  const isOnline = status === 'online';
  return (
    <>{isOnline && <span className={cx(styles.online, className)}>●</span>}</>
  );
};
export default UserStatus;
