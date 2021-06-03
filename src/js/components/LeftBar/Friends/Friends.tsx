import styles from './Friends.module.css';
import React, { useEffect, useState } from 'react';
import { getFriends } from '../../../API/friends/methods';
import { User } from '../../../models/interfaces';
import { UserStatus, UserRow } from '../../common';
import usePaginatedData from '../../../hooks/usePaginatedData';
import InfiniteScroll from 'react-infinite-scroll-component';

export type FriendsProps = {
  searchTerm: string;
  startChat: (friendId: number) => void;
  activeChatId: number | null;
};

const Friends = ({ searchTerm, startChat, activeChatId }: FriendsProps) => {
  const [filteredFriends, setFilteredFriends] = useState<User[]>([]);

  const { data, nextPage, hasMore } = usePaginatedData<User>(getFriends(10));

  const toUserRowComponent = (friend: User) => {
    return (
      <UserRow.UserRow
        key={`friend_${friend.id}`}
        className={styles.friend}
        onClick={() => startChat(friend.id)}
        isActive={activeChatId === friend.id}
        info={
          <UserRow.UserInfo
            name={friend.firstName + ' ' + friend.lastName}
            url={friend.profilePhoto}
          />
        }
      >
        <UserStatus status={friend.id % 3 === 0 ? 'online' : 'offline'} />
      </UserRow.UserRow>
    );
  };

  useEffect(() => {
    const result = data.filter((friend) =>
      (
        friend.firstName.toLowerCase() +
        ' ' +
        friend.lastName.toLowerCase()
      ).includes(searchTerm.toLowerCase())
    );
    console.log(result);
    setFilteredFriends(result);
  }, [searchTerm, data]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Znajomi</div>
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {filteredFriends.length > 0 ? (
          filteredFriends.map(toUserRowComponent)
        ) : (
          <h4>Brak</h4>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default Friends;
