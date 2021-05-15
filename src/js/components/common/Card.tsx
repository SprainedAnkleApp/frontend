import cx from 'classnames';

import styles from './Card.module.css';
import React from 'react';
import Icon from './Icon';
import { User } from '../../models/interfaces';

export type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    return (
      // eslint-disable-next-line react/prop-types
      <div className={cx(styles.card, props.className)} ref={ref}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </div>
    );
  }
);

export type CardHeaderProps = {
  user: User;
  timestamp?: string;
  active: boolean;
  rightPart: React.ReactNode;
};

export const CardHeader = ({
  timestamp,
  active,
  rightPart,
  user,
}: CardHeaderProps) => {
  return (
    <div className={styles.header}>
      <Icon url={user?.profilePhoto} variant="s" />
      <div className={styles.nameWithTime}>
        <span className={styles.userName}>{user?.login}</span>
        <span className={cx(styles.time, { [styles.active]: active })}>
          {active ? 'Active' : timestamp}
        </span>
      </div>
      <div className={styles.onRight}>{rightPart}</div>
    </div>
  );
};

Card.displayName = 'Card';

export default {
  Card: Card,
  Header: CardHeader,
};
