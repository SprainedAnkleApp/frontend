import styles from './FriendInfo.module.css';
import { Icon } from '../common';
import UserStatus from './UserStatus';

import cx from 'classnames';

const FriendInfo = ({ id, url, name, status = 'online', className, startChat }) => {
  return (
    <div className={cx(styles.wrapper, className)} onClick={startChat}>
      <Icon url={url} />
      <span className={styles.name}>{name}</span>
      <UserStatus status={Math.random() > 0.5 ? 'online' : 'offline'} className={styles.status} />
    </div>
  );
};

export default FriendInfo;
