import React, { useEffect, useState } from 'react';
import { Post as PostType } from '../../models/interfaces';
import { getPeakPosts } from '../../API/peaks/methods';
import { Post } from '../Home';
import styles from './PeakPosts.module.css';

const PeakPosts = ({ peakId }: { peakId: string }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      setPosts(await getPeakPosts(peakId));
    };
    getPosts();
  }, []);

  const renderPosts = () =>
    posts?.map((post) => (
      <Post key={post.id} {...post} className={styles.post} />
    ));

  return <div>{renderPosts()}</div>;
};

export default PeakPosts;
