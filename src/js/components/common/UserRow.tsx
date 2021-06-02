import styles from './UserRow.module.css';
import { Icon } from '.';

import cx from 'classnames';
import React from 'react';

export type UserRowProps = {
  url: string;
  name: string;
  className?: string;
  startChat?: () => void;
  isChatActive?: boolean;
  children?: React.ReactNode;
};

const UserRow = ({
  url,
  name,
  className,
  isChatActive,
  startChat,
  children,
}: UserRowProps) => {
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
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default UserRow;
