import styles from './Friends.module.css';
import React, { useEffect, useState } from 'react';
import { getFriends } from '../../../API/friends/methods';
import { Friend } from '../../../models/interfaces';
import { UserStatus, UserRow } from '../../common';

export type FriendsProps = {
  searchTerm: string;
  startChat: (friendId: number) => void;
  activeChatId: number | null;
};

const Friends = ({ searchTerm, startChat, activeChatId }: FriendsProps) => {
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);

  const toFriendInfoComponent = (friend: Friend) => {
    return (
      <UserRow
        key={`friend_${friend.id}`}
        name={friend.firstName + ' ' + friend.lastName}
        url={friend.profilePhoto}
        className={styles.friend}
        startChat={() => startChat(friend.id)}
        isChatActive={activeChatId === friend.id}
      >
        {' '}
        <UserStatus status={friend.id % 3 === 0 ? 'online' : 'offline'} />
      </UserRow>
    );
  };

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
      <div className={styles.title}>Znajomi</div>
      {filteredFriends.map(toFriendInfoComponent)}
    </div>
  );
};

export default Friends;
