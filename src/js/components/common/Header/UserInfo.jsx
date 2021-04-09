import { KebabMenu, Avatar } from '../';
import Image from '../../../../images/mountain.jpg';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar url={Image} />
      <div className={styles.userName}>Bartosz Kaszuba</div>
      <KebabMenu />
    </div>
  );
};

export default UserInfo;
