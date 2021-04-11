import styles from './FriendInfo.module.css';
import { Icon } from '../common';
import UserStatus from './UserStatus';

import cx from 'classnames';

const FriendInfo = ({ url, name, status = 'online', className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <Icon url={url} />
      <span className={styles.name}>{name}</span>
      <UserStatus status={status} className={styles.status} />
    </div>
  );
};

export default FriendInfo;
