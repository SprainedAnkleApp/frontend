import React from 'react';
import { Post as PostType } from '../../models/interfaces';
import { getPeakPostsPaginated } from '../../API/peaks/methods';
import { Post } from '../Home';
import styles from './PeakPosts.module.css';
import usePaginatedData from '../../hooks/usePaginatedData';
import InfiniteScroll from 'react-infinite-scroll-component';

const PeakPosts = ({ peakId }: { peakId: string }) => {
  const { data, nextPage, hasMore } = usePaginatedData<PostType>(
    getPeakPostsPaginated(peakId, 10)
  );

  const renderPosts = () =>
    data.map((post) => (
      <Post key={post.id} {...post} className={styles.post} />
    ));

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        scrollableTarget="peakPostsScroll"
        loader={<h4>Loading...</h4>}
        className={styles.peakScroll}
      >
        {renderPosts()}
      </InfiniteScroll>
    </div>
  );
};

export default PeakPosts;
