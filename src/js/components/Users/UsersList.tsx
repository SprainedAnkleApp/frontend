import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { MdPersonAdd } from 'react-icons/md';
import { User } from '../../models/interfaces';
import { UsersListOptions } from '../../views/Users/Users';
import React, { useEffect, useContext, useState } from 'react';
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
import useModalRescuer from '../../hooks/useModalRescuer';
import { userContext } from '../../contexts/CurrentUser';

export type ListProps<T extends User> = {
  state: UsersListOptions;
  userFetcher: Fetcher<T>;
};

const UsersList = <T extends User>({ state, userFetcher }: ListProps<T>) => {
  const { data, nextPage, hasMore, refetch } = usePaginatedData<T>(userFetcher);
  const { openModal, rescuer } = useModalRescuer();
  const { user: currentUser } = useContext(userContext);
  const [frendAction, setFriendAction] = useState<number>(0);

  useEffect(() => {
    refetch();
  }, [userFetcher, frendAction]);

  const createButtons = (id: number) => {
    if (state === 'all') {
      return (
        <MdPersonAdd
          className={styles.icon}
          onClick={async () => {
            try {
              await addFriendship(id);
              setFriendAction(Math.random());
            } catch (e) {
              openModal('Już zaprosiłeś tę osobę');
            }
          }}
        />
      );
    } else {
      return (
        <div>
          <AiOutlineCheck
            className={styles.icon}
            onClick={async () => {
              try {
                await acceptFriendship(id);
                setFriendAction(Math.random());
              } catch (e) {
                openModal();
              }
            }}
          />
          <AiOutlineClose
            className={styles.icon}
            onClick={async () => {
              try {
                await rejectFriendship(id);
                setFriendAction(Math.random());
              } catch (e) {
                openModal();
              }
            }}
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
        data.map((user) => {
          if (user.id === currentUser.id) return null;
          return (
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
          );
        })
      ) : (
        <div className={styles.placeholder}>
          <p>Nie znaleziono {state == 'all' ? 'użytkowników' : 'zaproszeń'}</p>
          <BiSad className={styles.placeholderIcon} />
        </div>
      )}
      {rescuer}
    </InfiniteScroll>
  );
};

export default UsersList;
