import styles from './FriendInfo.module.css';
import { Icon, UserStatus } from '../../common';

import cx from 'classnames';
import React from 'react';

export type FriendInfoProps = {
  url: string;
  name: string;
  className: string;
  status: 'online' | 'offline';
  startChat?: () => void;
  isChatActive?: boolean;
};

const FriendInfo = ({
  url,
  name,
  className,
  status,
  isChatActive,
  startChat,
}: FriendInfoProps) => {
  return (
    <div
      className={cx(
        styles.wrapper,
        { [styles.chatActive]: isChatActive },
        className
      )}
      onClick={startChat}
    >
      <Icon url={url} />
      <span className={styles.name}>{name}</span>
      <UserStatus status={status} className={styles.status} />
    </div>
  );
};

export default FriendInfo;
