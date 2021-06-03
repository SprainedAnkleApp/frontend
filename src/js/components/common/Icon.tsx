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
  const [showPlaceholder, setShowPlaceholder] = useState(!url);
  return (
    <div className={cx(styles.avatar, styles[`${variant}Size`], className)}>
      {!showPlaceholder ? (
        <img
          src={url}
          alt="icon"
          className={styles.photo}
          onError={() => setShowPlaceholder(true)}
        />
      ) : (
        <BsPersonFill className={styles.photo} />
      )}
    </div>
  );
};

export default Icon;
