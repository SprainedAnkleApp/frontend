import styles from './UserRow.module.css';
import { Icon } from '.';

import cx from 'classnames';
import React from 'react';

export type UserRowProps = {
  info: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
};

const UserRow = ({
  className,
  isActive,
  onClick,
  info,
  children,
}: UserRowProps) => {
  return (
    <div
      className={cx(
        styles.wrapper,
        { [styles.chatActive]: isActive },
        className
      )}
      onClick={onClick}
    >
      {info}
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export type UserInfoProps = {
  url: string;
  name: string;
  iconClassName?: string;
  textClassName?: string;
};

const UserInfo = ({
  url,
  iconClassName,
  textClassName,
  name,
}: UserInfoProps) => (
  <>
    <Icon url={url} className={iconClassName} />
    <span className={cx(styles.name, textClassName)}>{name}</span>
  </>
);

UserRow.displayName = 'UserRow';

export default {
  UserRow: UserRow,
  UserInfo: UserInfo,
};
