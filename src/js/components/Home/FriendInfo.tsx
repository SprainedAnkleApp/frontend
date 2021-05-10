import styles from './FriendInfo.module.css';
import { Icon } from '../common';
import UserStatus from './UserStatus';

import cx from 'classnames';
import React from 'react';

export type FriendInfoProps = {
  id: number;
  url: string;
  name: string;
  status?: 'online' | 'offline';
  className: string;
  startChat: () => void;
};

const FriendInfo = ({
  id,
  url,
  name,
  status = 'online',
  className,
  startChat,
}: FriendInfoProps) => {
  return (
    <div className={cx(styles.wrapper, className)} onClick={startChat}>
      <Icon url={url} />
      <span className={styles.name}>{name}</span>
      <UserStatus
        status={Math.random() > 0.5 ? 'online' : 'offline'}
        className={styles.status}
      />
    </div>
  );
};

export default FriendInfo;
