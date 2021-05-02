import { Header } from '../../components/common/Header';
import { Friends, NewPost, Posts, Achievements } from '../../components/Home';
import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState } from 'react';

const Home = () => {
  const user = {
    userName: 'Bartosz Kaszuba',
    photoUrl: Image,
  };
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.main}>
      <Header
        selected={'home'}
        user={user}
        searchTerm={searchTerm}
        onChangeSearchTerm={(event) => setSearchTerm(event.target.value)}
      />
      <div className={styles.home}>
        <Friends searchTerm={searchTerm} />
        <NewPost user={user} />
        <Posts user={user} />
        <Achievements user={user} />
      </div>
    </div>
  );
};

export default Home;
