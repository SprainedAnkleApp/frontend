import React from 'react';
import styles from './ProfileFriends.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData, { Fetcher } from '../../../hooks/usePaginatedData';
import { User as UserType } from '../../../models/interfaces';
import FriendCard from './FriendCard';

export type ProfileFirendsProps = {
  friendsFetcher: Fetcher<UserType>;
};

const ProfileFriends = ({ friendsFetcher }: ProfileFirendsProps) => {
  const { data, nextPage, hasMore } = usePaginatedData<UserType>(
    friendsFetcher
  );

  const renderFriends = () =>
    data.map((user) => {
      if (user != null) {
        return <FriendCard key={user.id} {...user} />;
      }
    });

  return (
    <div className={styles.achivementsWrapper}>
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        scrollableTarget="postsScroll"
        loader={<h4>Loading...</h4>}
        className={styles.peakScroll}
      >
        {renderFriends()}
      </InfiniteScroll>
    </div>
  );
};

export default ProfileFriends;
