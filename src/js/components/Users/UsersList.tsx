import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { MdPersonAdd } from 'react-icons/md';
import { User } from '../../models/interfaces';
import { UsersListOptions } from '../../views/Users/Users';
import React, { useEffect } from 'react';
import { UserRow } from '../common';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData, { Fetcher } from '../../hooks/usePaginatedData';
import { BiSad } from 'react-icons/bi';

import styles from './UsersList.module.css';
import {
  addFriendship,
  rejectFriendship,
  acceptFriendship,
} from '../../API/friends/methods';

export type ListProps<T extends User> = {
  state: UsersListOptions;
  userFetcher: Fetcher<T>;
};

const UsersList = <T extends User>({ state, userFetcher }: ListProps<T>) => {
  const { data, nextPage, hasMore, refetch } = usePaginatedData<T>(userFetcher);

  useEffect(() => {
    refetch();
  }, [userFetcher]);

  const createButtons = (id: number) => {
    if (state === 'all') {
      return (
        <MdPersonAdd
          className={styles.icon}
          onClick={() => addFriendship(id)}
        />
      );
    } else {
      return (
        <div>
          <AiOutlineCheck
            className={styles.icon}
            onClick={() => acceptFriendship(id)}
          />
          <AiOutlineClose
            className={styles.icon}
            onClick={() => rejectFriendship(id)}
          />
        </div>
      );
    }
  };
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={nextPage}
      hasMore={hasMore}
      scrollableTarget="postsScroll"
      loader={<h4>Loading...</h4>}
      className={styles.userScroll}
    >
      {data.length > 0 ? (
        data.map((user) => (
          <UserRow.UserRow
            key={`friend_${user.id}`}
            className={styles.user}
            info={
              <UserRow.UserInfo
                name={user.firstName + ' ' + user.lastName}
                url={user.profilePhoto}
              />
            }
          >
            {createButtons(user.id)}
          </UserRow.UserRow>
        ))
      ) : (
        <div className={styles.placeholder}>
          <p>Nie znaleziono {state == 'all' ? 'użytkowników' : 'zaproszeń'}</p>
          <BiSad className={styles.placeholderIcon} />
        </div>
      )}
    </InfiniteScroll>
  );
};

export default UsersList;
