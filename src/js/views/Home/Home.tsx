import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect, useCallback } from 'react';
import { getCurrentUser } from '../../API/user/methods';
import Stomp from 'stompjs';

import React from 'react';
import { User } from '../../models/interfaces';
import { LeftBar } from '../../components/LeftBar';
import { RightBar } from '../../components/RightBar';
import { Central } from '../../components/Central';
import useWebsocket from '../../hooks/useWebsocket';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [newPeakReached, setNewPeakReached] = useState<number>(0);

  const {
    connect: connectToChatFeed,
    isWebsocketActive,
    sendMessage,
  } = useWebsocket<{ name: string }>('websocket_chat');

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

  const handleChatMessage = useCallback((frame: Stomp.Frame) => {
    console.log(frame.body);
  }, []);

  useEffect(() => {
    if (user && isWebsocketActive)
      connectToChatFeed(`/messages/${user.id}`, handleChatMessage);
  }, [user, isWebsocketActive]);

  if (!user) return <div>Loading</div>;
  return (
    <div className={styles.home}>
      {/* <button onClick={() => sendMessage('api/chat', { name: 'hejka' })} /> */}
      <LeftBar
        headerStyles={styles.paneHeader}
        searchTerm={searchTerm}
        onChangeSearchTerm={(value) => setSearchTerm(value)}
        startChat={(friendId) => setActiveChatId(friendId)}
        activeChatId={activeChatId}
      />
      <Central
        activeChatId={activeChatId}
        headerStyles={styles.paneHeader}
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
