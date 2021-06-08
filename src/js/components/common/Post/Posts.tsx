import styles from './Posts.module.css';
import Post from './Post';
import { Post as PostType } from '../../../models/interfaces';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData, { Fetcher } from '../../../hooks/usePaginatedData';
import { useEffect } from 'react';

export type PostsProps = {
  postsFetcher: Fetcher<PostType>;
  scrollId: string;
  className?: string;
  children?: React.ReactNode;
  newPostAdded?: number;
};

const Posts = ({
  className,
  postsFetcher,
  scrollId,
  children,
  newPostAdded = 0,
}: PostsProps) => {
  const { data, nextPage, hasMore, refetch } = usePaginatedData<PostType>(
    postsFetcher
  );

  const renderPosts = () =>
    data
      .filter((post) => post)
      .map((post) => {
        return <Post key={post.id} {...post} className={styles.post} />;
      });

  useEffect(() => {
    refetch();
  }, [postsFetcher, newPostAdded]);

  return (
    <div className={className}>
      {children}
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        scrollableTarget={scrollId}
        loader={<h4>Loading...</h4>}
        className={styles.peakScroll}
      >
        {renderPosts()}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
