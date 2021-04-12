import Image from '../../../images/mountain.jpg';

import styles from './Friends.module.css';
import FriendInfo from './FriendInfo';

const Friends = () => {
  const friends = [
    { name: 'Bartosz Kaszuba', url: Image },
    { name: 'Konrad Dębiec', url: Image },
  ].map((friend) => (
    <FriendInfo
      key={`friend_name_${friend.name}`}
      name={friend.name}
      url={friend.url}
      className={styles.friend}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>
      {friends}
    </div>
  );
};

export default Friends;
