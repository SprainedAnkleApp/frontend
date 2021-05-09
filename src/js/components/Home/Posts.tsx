import styles from './Posts.module.css';
import { Post } from '.';
import { useState, useEffect } from 'react';
import { getPosts } from '../../API/wall/methods';
import { User, Post as PostType } from '../../models/interfaces';
import React from 'react';

const Posts = ({ user }: { user: User }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPosts());
    };
    fetchPosts();
  }, []);

  const renderPosts = () =>
    posts.map((post) => (
      <Post
        key={post.timestamp}
        {...post}
        user={user}
        className={styles.post}
      />
    ));

  return <div className={styles.wrapper}>{renderPosts()}</div>;
};

export default Posts;
