import cx from 'classnames';

import styles from './Icon.module.css';
import React from 'react';

export type IconProps = {
  className?: string;
  url: string;
  variant?: 'xs' | 's' | 'm' | 'l';
};

const Icon = ({ className, url, variant = 'm' }: IconProps) => {
  return (
    <div className={cx(styles.avatar, styles[`${variant}Size`], className)}>
      <img src={url} alt="icon" className={styles.photo} />
    </div>
  );
};

export default Icon;
