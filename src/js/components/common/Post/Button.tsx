import React from 'react';
import styles from './Button.module.css';

import cx from 'classnames';

export type ButtonProps = {
  active?: boolean;
  onClick: () => void;
  className: string;
  icon: React.ReactNode;
  count?: number;
};

const Button = ({
  active = false,
  onClick,
  className,
  icon,
  count,
}: ButtonProps) => (
  <div
    className={cx(styles.container, { [styles.clicked]: active }, className)}
  >
    <button className={styles.icon} onClick={onClick}>
      {icon}
      <span className={styles.text}>{count}</span>
    </button>
  </div>
);

export default Button;
