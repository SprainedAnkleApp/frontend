import styles from './FriendInfo.module.css';
import { Icon } from '../common';
import UserStatus from './UserStatus';

import cx from 'classnames';
import React from 'react';

export type FriendInfoProps = {
  url: string;
  name: string;
  status?: 'online' | 'offline';
  className: string;
};

const FriendInfo = ({
  url,
  name,
  status = 'online',
  className,
}: FriendInfoProps) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <Icon url={url} />
      <span className={styles.name}>{name}</span>
      <UserStatus status={status} className={styles.status} />
    </div>
  );
};

export default FriendInfo;
