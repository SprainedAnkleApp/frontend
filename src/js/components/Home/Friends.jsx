import styles from './Friends.module.css';
import FriendInfo from './FriendInfo';
import { useEffect, useState } from 'react';
import { getFriends } from '../../API/friends/methods';

const Friends = ({ searchTerm }) => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getFriends().then((friends) => {
      const result = friends
        .filter(
          (friend) =>
            friend.firstName.toLowerCase().includes(searchTerm) ||
            friend.lastName.toLowerCase().includes(searchTerm)
        )
        .map((friend) => (
          <FriendInfo
            key={`friend_${friend.id}`}
            id={friend.id}
            name={friend.firstName + ' ' + friend.lastName}
            url={friend.profilePhoto}
            className={styles.friend}
            onClick={() => console.log(friend.id)}
          />
        ));
      setSearchResult(result);
    });
  }, [searchTerm]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>
      {searchResult}
    </div>
  );
};

export default Friends;
