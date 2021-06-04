import cx from 'classnames';

import { BsPersonFill } from 'react-icons/bs';
import styles from './Icon.module.css';
import React, { useState } from 'react';

export type IconProps = {
  className?: string;
  url: string;
  variant?: 'xs' | 's' | 'm' | 'l';
};

const Icon = ({ className, url, variant = 'm' }: IconProps) => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <div className={cx(styles.avatar, styles[`${variant}Size`], className)}>
      {url && showIcon ? (
        <img
          src={url}
          alt="icon"
          className={styles.photo}
          onError={() => setShowIcon(false)}
        />
      ) : (
        <BsPersonFill className={styles.photo} />
      )}
    </div>
  );
};

export default Icon;
