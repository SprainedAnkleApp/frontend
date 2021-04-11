import { Header } from '../../components/common/Header';
import { Friends, NewPost, Posts, Achievements } from '../../components/Home';
import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';

const Home = () => {
  const user = {
    userName: 'Bartosz Kaszuba',
    photoUrl: Image,
  };
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
