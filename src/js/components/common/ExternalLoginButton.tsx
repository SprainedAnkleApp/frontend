import cx from 'classnames';
import styles from './ExternalLoginButton.module.css';
import React from 'react';

export type ExternalLoginButtonTypes = {
  url: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
};

const ExternalLoginButton = ({
  className,
  url,
  text,
  icon,
}: ExternalLoginButtonTypes) => {
  return (
    <a className={styles.container} href={url}>
      <div className={styles.icon}>{icon}</div>
      <span className={cx(styles.button, className)}>{text}</span>
    </a>
  );
};

export default ExternalLoginButton;
