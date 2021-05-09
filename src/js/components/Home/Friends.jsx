import styles from './Friends.module.css';
import FriendInfo from './FriendInfo';
import { useEffect, useState } from 'react';
import { getFriends } from '../../API/friends/methods';

const toFriendInfoComponent = (friend) => {
  return (
    <FriendInfo
      key={`friend_${friend.id}`}
      id={friend.id}
      name={friend.firstName + ' ' + friend.lastName}
      url={friend.profilePhoto}
      className={styles.friend}
    />
  );
};

const Friends = ({ searchTerm }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends().then((result) => {
      setFriends(result);
      setSearchResult(result.map(toFriendInfoComponent));
    });
  }, []);

  useEffect(() => {
    const result = friends
      .filter(
        (friend) =>
          friend.firstName.toLowerCase().includes(searchTerm) ||
          friend.lastName.toLowerCase().includes(searchTerm)
      )
      .map(toFriendInfoComponent);
    setSearchResult(result);
  }, [searchTerm]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>
      {searchResult}
    </div>
  );
};

export default Friends;
