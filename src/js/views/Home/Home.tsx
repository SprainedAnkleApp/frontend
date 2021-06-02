import { Header } from '../../components/common/Header';
import {
  Friends,
  Achievements,
  ChatWindow,
  Profile,
  NewPost,
} from '../../components/Home';
import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../API/user/methods';
import { Switch, Route, useLocation } from 'react-router';
import { PeaksList } from '../PeaksList';
import React from 'react';
import { User } from '../../models/interfaces';
import { PeakDetails } from '../Peak';
import { Posts } from '../../components/common/Post';
import { getPostsPaginated } from '../../API/wall/methods';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const location = useLocation<Location>();

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
        searchTerm={searchTerm}
        onChangeSearchTerm={(value) => setSearchTerm(value)}
      />
      <div className={styles.home}>
        <Friends
          searchTerm={searchTerm}
          startChat={(friendId: number) => setActiveChatId(friendId)}
          activeChatId={activeChatId}
        />
        <Switch>
          <Route path="/profile">
            <Profile className={styles.central} />
          </Route>
          <Route path="/peaks/:id">
            <PeakDetails className={styles.central} />
          </Route>
          <Route path="/peaks">
            <PeaksList className={styles.central} />
          </Route>
          <Route path="/chat">
            <ChatWindow
              activeChatId={activeChatId}
              className={styles.central}
            />
          </Route>
          <Route path="/">
            <Posts
              className={styles.central}
              postsFetcher={getPostsPaginated(10)}
            >
              <NewPost />
            </Posts>
          </Route>
        </Switch>
        <Achievements />
        {location.pathname !== '/chat' && activeChatId !== null && (
          <ChatWindow
            activeChatId={activeChatId}
            className={styles.chat}
            onClose={() => setActiveChatId(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
