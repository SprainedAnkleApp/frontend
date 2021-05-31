import styles from './Posts.module.css';
import Post from './Post';
import { Post as PostType } from '../../../models/interfaces';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData, { Fetcher } from '../../../hooks/usePaginatedData';

export type PostsProps = {
  postsFetcher: Fetcher<PostType>;
  currentUserId: number;
  className?: string;
  children?: React.ReactNode;
};

const Posts = ({
  currentUserId,
  className,
  postsFetcher,
  children,
}: PostsProps) => {
  const { data, nextPage, hasMore } = usePaginatedData<PostType>(postsFetcher);

  const renderPosts = () =>
    data.map((post) => {
      console.log(post);
      return (
        <Post
          currentUserId={currentUserId}
          key={post.id}
          {...post}
          className={styles.post}
        />
      );
    });

  return (
    <div className={className} id="postsScroll">
      {children}
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        scrollableTarget="postsScroll"
        loader={<h4>Loading...</h4>}
        className={styles.peakScroll}
      >
        {renderPosts()}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
