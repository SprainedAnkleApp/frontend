import styles from './FriendInfo.module.css';
import { Icon } from '../common';
import UserStatus from './UserStatus';

import cx from 'classnames';
import React from 'react';

export type FriendInfoProps = {
  url: string;
  name: string;
  className: string;
  status: 'online' | 'offline';
  startChat?: () => void;
};

const FriendInfo = ({
  url,
  name,
  className,
  status,
  startChat,
}: FriendInfoProps) => {
  return (
    <div className={cx(styles.wrapper, className)} onClick={startChat}>
      <Icon url={url} />
      <span className={styles.name}>{name}</span>
      <UserStatus status={status} className={styles.status} />
    </div>
  );
};

export default FriendInfo;
