import styles from './Posts.module.css';
import { Post } from '.';
import { getPostsPaginated } from '../../API/wall/methods';
import { Post as PostType } from '../../models/interfaces';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData from '../../hooks/usePaginatedData';
import NewPost from './NewPost';

export type PostsProps = {
  className: string;
};

const Posts = ({ className }: PostsProps) => {
  const { data, nextPage, hasMore } = usePaginatedData<PostType>(
    getPostsPaginated(10)
  );

  const renderPosts = () =>
    data.map((post) => (
      <Post key={post.timestamp} {...post} className={styles.post} />
    ));

  return (
    <div className={className} id="postsScroll">
      <NewPost />
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        scrollableTarget="postsScroll"
        loader={<h4>Loading...</h4>}
        className={styles.postListPadding}
      >
        {renderPosts()}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
