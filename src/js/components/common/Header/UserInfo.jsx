import { KebabMenu, Avatar } from '../';

import styles from './UserInfo.module.css';

const UserInfo = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <Avatar url={user.photoUrl} />
      <div className={styles.userName}>{user.userName}</div>
      <KebabMenu />
    </div>
  );
};

export default UserInfo;
