import { Header } from '../../components/common/Header';
import { Friends, NewPost, Posts, Achievements } from '../../components/Home';
import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../API/user/methods';
import { Switch, Route } from 'react-router';
import { PeaksList } from '../PeaksList';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUser();
    userData.then((data) => {
      if (!data) {
        setUser(null);
        return;
      }
      data.photoUrl = data.photoUrl || Image;
      setUser(data);
    });
  }, []);

  if (!user) return <div>Loading</div>;
  return (
    <div className={styles.main}>
      <Header user={user} />
      <div className={styles.home}>
        <Friends />
        <Switch>
          <Route path="/peaks">
            <PeaksList />
          </Route>
          <Route path="/">
            <NewPost user={user} />
            <Posts user={user} />
          </Route>
        </Switch>
        <Achievements user={user} />
      </div>
    </div>
  );
};

export default Home;
