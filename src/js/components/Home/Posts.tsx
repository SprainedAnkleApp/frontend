import styles from './Posts.module.css';
import { Post } from '.';
import { getPostsPaginated } from '../../API/wall/methods';
import { Post as PostType } from '../../models/interfaces';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData from '../../hooks/usePaginatedData';

const Posts = () => {
  const { data, nextPage, hasMore } = usePaginatedData<PostType>(
    getPostsPaginated(60)
  );

  const renderPosts = () =>
    data.map((post) => (
      <Post key={post.timestamp} {...post} className={styles.post} />
    ));

  return (
    <div className={styles.wrapper}>
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {renderPosts()}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
