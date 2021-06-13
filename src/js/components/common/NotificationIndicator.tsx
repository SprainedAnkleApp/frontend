import React from 'react';
import cx from 'classnames';

import styles from './NotificationIndicator.module.css';

const NotificationIndicator = ({
  className,
  count,
}: {
  className: string;
  count: number;
}) => <div className={cx(styles.indicator, className)}>{count}</div>;
export default NotificationIndicator;
