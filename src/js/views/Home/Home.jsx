import { Header } from '../../components/common/Header';
import { Friends, NewPost, Posts, Achievements } from '../../components/Home';
import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../API/wall/methods';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUser();
    userData.then((data) => {
      data.photoUrl = data.photoUrl || Image;
      setUser(data);
    });
  }, []);

  if (!user) return <div>Loading</div>;
  return (
    <div className={styles.main}>
      <Header selected={'home'} user={user} />
      <div className={styles.home}>
        <Friends />
        <NewPost user={user} />
        <Posts user={user} />
        <Achievements user={user} />
      </div>
    </div>
  );
};

export default Home;
