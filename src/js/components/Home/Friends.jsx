import Image from '../../../../images/mountain.jpg';

import styles from './Friends.module.css';

const Friends = () => {
  const friends = [
    { name: 'Bartosz Kaszuba', url: Image },
    { name: 'Konrad Dębiec', url: Image },
  ].map((friend) => friend.name);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>>{friends}
    </div>
  );
};

export default Friends;
