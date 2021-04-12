import styles from './Posts.module.css';
import { Post } from '.';
import { useState, useEffect } from 'react';
import Image from '../../../images/mountain.jpg';
import { getPosts } from '../../API/wall/methods';

const Posts = ({ user }) => {
  const mockPosts = [
    {
      url: user.photoUrl,
      userName: user.userName,
      content: 'post1',
      timestamp: 'mock',
      liked: 10,
      comments: 10,
      watch: 10,
    },
    {
      url: user.photoUrl,
      userName: user.userName,
      type: 'photo',
      content: Image,
      timestamp: 'mock',
      liked: 10,
      comments: 10,
      watch: 10,
    },
  ];
  const [posts, setPosts] = useState(mockPosts);

  useEffect(() => {
    const posts = getPosts();
    posts.then((data) => {
      setPosts(mockPosts.concat(data));
    });
  }, []);

  const renderPosts = () => posts.map((post) => <Post {...post} className={styles.post} />);

  return <div className={styles.wrapper}>{renderPosts()}</div>;
};

export default Posts;
