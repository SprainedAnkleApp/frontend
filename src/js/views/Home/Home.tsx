import { Header } from '../../components/common/Header';
import { Friends, NewPost, Posts, Achievements } from '../../components/Home';
import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../API/user/methods';
import { Switch, Route } from 'react-router';
import { PeaksList } from '../PeaksList';
import React from 'react';
import { User } from '../../models/interfaces';
import { PeakDetails } from '../Peak';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      if (!userData) {
        setUser(null);
        return;
      }
      userData.profilePhoto = userData.profilePhoto || Image;
      setUser(userData);
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading</div>;
  return (
    <div className={styles.main}>
      <Header
        user={user}
        searchTerm={searchTerm}
        onChangeSearchTerm={(value) => setSearchTerm(value)}
      />
      <div className={styles.home}>
        <Friends searchTerm={searchTerm} />
        <Switch>
          <Route path="/peaks/:id">
            <PeakDetails />
          </Route>
          <Route path="/peaks">
            <PeaksList />
          </Route>
          <Route path="/">
            <NewPost user={user} />
            <Posts user={user} />
          </Route>
        </Switch>
        <Achievements />
      </div>
    </div>
  );
};

export default Home;
