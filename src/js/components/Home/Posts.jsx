import styles from './Posts.module.css';
import { Post } from '.';

const Posts = ({ user }) => {
  const posts = [
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
      content: 'post2',
      timestamp: 'mock',
      liked: 10,
      comments: 10,
      watch: 10,
    },
    {
      url: user.photoUrl,
      userName: user.userName,
      content: 'post3',
      timestamp: 'mock',
      liked: 10,
      comments: 10,
      watch: 10,
    },
    {
      url: user.photoUrl,
      userName: user.userName,
      type: 'photo',
      content: user.photoUrl,
      timestamp: 'mock',
      liked: 10,
      comments: 10,
      watch: 10,
    },
  ].map((post) => <Post {...post} className={styles.post} />);

  return <div className={styles.wrapper}>{posts}</div>;
};

export default Posts;
