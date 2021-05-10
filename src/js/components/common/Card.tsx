import cx from 'classnames';

import styles from './Card.module.css';
import React from 'react';

export type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return <div className={cx(styles.card, className)}>{children}</div>;
};

export default Card;
