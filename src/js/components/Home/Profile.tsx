import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import postStyles from '../common/Post/Posts.module.css';
import styles from './Profile.module.css';
import Post from '../common/Post/Post';
import { Post as PostType } from '../../models/interfaces';
import { getPostsPaginated } from '../../API/wall/methods';
import { ProfileUserCard, ProfileNavBar } from './Profile/index';
import usePaginatedData from '../../hooks/usePaginatedData';

export type ProfileProps = {
  className: string;
};

const Profile = ({ className }: ProfileProps) => {
  const { data, nextPage, hasMore } = usePaginatedData<PostType>(
    getPostsPaginated(10)
  );

  const renderPosts = () =>
    data.map((post) => (
      <Post key={post.timestamp} {...post} className={postStyles.post} />
    ));

  return (
    <div className={className}>
      <ProfileUserCard />
      <ProfileNavBar />
      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <InfiniteScroll
            dataLength={data.length}
            next={nextPage}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            {renderPosts()}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Profile;
