import styles from './Friends.module.css';
import FriendInfo from './FriendInfo';
import React, { useEffect, useState } from 'react';
import { getFriends } from '../../API/friends/methods';
import { Friend } from '../../models/interfaces';

const toFriendInfoComponent = (friend: Friend) => {
  return (
    <FriendInfo
      key={`friend_${friend.id}`}
      name={friend.firstName + ' ' + friend.lastName}
      url={friend.profilePhoto}
      className={styles.friend}
    />
  );
};

export type FriendsProps = {
  searchTerm: string;
};

const Friends = ({ searchTerm }: FriendsProps) => {
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const result = await getFriends();
        setFriends(result);
        setFilteredFriends(result);
        // TODO error handling
      } catch (e) {
        console.log(e);
      }
    };
    fetchFriends();
  }, []);

  useEffect(() => {
    const result = friends.filter((friend) =>
      (
        friend.firstName.toLowerCase() +
        ' ' +
        friend.lastName.toLowerCase()
      ).includes(searchTerm.toLowerCase())
    );
    setFilteredFriends(result);
  }, [searchTerm]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>
      {filteredFriends.map(toFriendInfoComponent)}
    </div>
  );
};

export default Friends;
