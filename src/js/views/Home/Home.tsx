import Image from '../../../images/mountain.jpg';

import styles from './Home.module.css';
import { useState, useEffect, useCallback, useContext } from 'react';
import { getCurrentUser } from '../../API/user/methods';
import Stomp from 'stompjs';

import React from 'react';
import { User } from '../../models/interfaces';
import { LeftBar } from '../../components/LeftBar';
import { RightBar } from '../../components/RightBar';
import { Central } from '../../components/Central';
import useWebsocket from '../../hooks/useWebsocket';
import { ChatContext } from '../../contexts/ChatContext';
import {
  subscribeWebsocketUrl,
  chatFeedWebsocketUrl,
  sendMessageWebsocketUrl,
} from '../../API/chat/urls';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [newPeakReached, setNewPeakReached] = useState<number>(0);

  const { registerBroker, broadcastMessage } = useContext(ChatContext);

  const {
    connect: connectToChatFeed,
    isWebsocketActive,
    sendMessage,
  } = useWebsocket<{ message: string; senderId: number; sendTo: number }>(
    subscribeWebsocketUrl()
  );

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
    const message = JSON.parse(frame.body);
    broadcastMessage({
      content: message.message,
      senderId: message.sender.id,
    });
  }, []);

  useEffect(() => {
    if (user && isWebsocketActive) {
      connectToChatFeed(chatFeedWebsocketUrl(user.id), handleChatMessage);
      registerBroker((sendTo: number, content: string) => {
        sendMessage(sendMessageWebsocketUrl(), {
          message: content,
          senderId: user.id,
          sendTo: sendTo,
        });
      });
    }
  }, [user, isWebsocketActive]);

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
