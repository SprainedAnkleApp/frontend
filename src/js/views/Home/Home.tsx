import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../API/user/methods';

import React from 'react';
import { User } from '../../models/interfaces';
import { LeftBar } from '../../components/LeftBar';
import { RightBar } from '../../components/RightBar';
import { Central } from '../../components/Central';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [newPeakReached, setNewPeakReached] = useState<number>(0);

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
    <div className={styles.home}>
      <LeftBar
        headerStyles={styles.paneHeader}
        searchTerm={searchTerm}
        onChangeSearchTerm={(value) => setSearchTerm(value)}
        startChat={(friendId) => setActiveChatId(friendId)}
        activeChatId={activeChatId}
      />
      <Central
        activeChatId={activeChatId}
        headerStyles={styles.paneHeaderCentral}
        newPeakReached={newPeakReached}
        setNewPeakReached={setNewPeakReached}
      />
      <RightBar
        headerStyles={styles.paneHeader}
        activeChatId={activeChatId}
        closeChat={() => setActiveChatId(null)}
        newPeakReached={newPeakReached}
      />
    </div>
  );
};

export default Home;
