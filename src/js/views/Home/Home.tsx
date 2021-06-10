import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect, useRef } from 'react';
import { getCurrentUser } from '../../API/user/methods';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

import React from 'react';
import { User } from '../../models/interfaces';
import { LeftBar } from '../../components/LeftBar';
import { RightBar } from '../../components/RightBar';
import { Central } from '../../components/Central';
import authHeader from '../../API/auth/methods';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [newPeakReached, setNewPeakReached] = useState<number>(0);

  const socket = useRef<null | WebSocket>(null);
  const stompClient = useRef<null | Stomp.Client>(null);

  const connect = () => {
    socket.current = new SockJS(`websocket_chat`);

    stompClient.current = Stomp.over(socket.current);
    stompClient.current.connect(authHeader(), onConnected, (error) =>
      console.log(error)
    );
  };

  const onConnected = () => {
    if (!user) return;
    stompClient.current &&
      stompClient.current.subscribe(`/messages/${user.id}`, onMessageReceived);
  };

  const onDisconnect = () => {
    console.log('Disconnected');
  };

  const onMessageReceived = (msg: Stomp.Frame) => {
    // const newMsg = {
    //   message: JSON.parse(currentMessage),
    //   sendTo: JSON.parse(`${activeChatId ?? 0}`),
    // };
    console.log('received', msg);
  };

  useEffect(() => {
    if (user) connect();
    return () => {
      stompClient.current && stompClient.current.disconnect(onDisconnect);
      socket.current && socket.current.close();
    };
  }, [user]);

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
