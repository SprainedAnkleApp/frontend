import styles from './Friends.module.css';
import FriendInfo from './FriendInfo';
import { useEffect, useState } from 'react';
import { getFriends } from '../../API/friends/methods';

const Friends = ({ searchTerm }) => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const result = getFriends()
      .filter(
        (friend) =>
          friend.firstName.toLowerCase().includes(searchTerm) ||
          friend.lastName.toLowerCase().includes(searchTerm)
      )
      .map((friend) => (
        <FriendInfo
          key={`friend_${friend.id}`}
          name={friend.firstName + ' ' + friend.lastName}
          url={friend.profilePhoto}
          className={styles.friend}
        />
      ));
    setSearchResult(result);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>
      {searchResult}
    </div>
  );
};

export default Friends;
