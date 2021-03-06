import React, { useEffect, useState } from 'react';
import { getFriends } from '../../../API/friends/methods';
import { User } from '../../../models/interfaces';
import usePaginatedData from '../../../hooks/usePaginatedData';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './Friends.module.css';
import { Friend } from '.';

export type FriendsProps = {
  searchTerm: string;
  startChat: (friendId: number) => void;
  activeChatId: number | null;
};

const Friends = ({ searchTerm, startChat, activeChatId }: FriendsProps) => {
  const [filteredFriends, setFilteredFriends] = useState<User[]>([]);

  const { data, nextPage, hasMore } = usePaginatedData<User>(getFriends(10));

  useEffect(() => {
    const result = data.filter((friend) =>
      (
        friend.firstName.toLowerCase() +
        ' ' +
        friend.lastName.toLowerCase()
      ).includes(searchTerm.toLowerCase())
    );
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
        {filteredFriends.map((friend) => (
          <Friend
            key={`Friend_${friend.id}`}
            friend={friend}
            startChat={() => startChat(friend.id)}
            activeChatId={activeChatId}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Friends;
