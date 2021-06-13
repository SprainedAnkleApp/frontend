import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import { User } from '../../../models/interfaces';
import { ChatContext } from '../../../contexts/ChatContext';
import { UserRow, NotificationIndicator } from '../../common';

import styles from './Friend.module.css';

type FriendProps = {
  friend: User;
  startChat: () => void;
  activeChatId: number | null;
};

const Friend = ({ friend, startChat, activeChatId }: FriendProps) => {
  const { subscribe, unsubscribe } = useContext(ChatContext);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const addNotification = () => setNotificationCount((count) => count + 1);
    subscribe(friend.id, addNotification);
    return () => unsubscribe(friend.id, addNotification);
  }, [friend, setNotificationCount]);

  useLayoutEffect(() => {
    return () => {
      activeChatId === friend.id && setNotificationCount(0);
    };
  }, [activeChatId, friend, setNotificationCount]);

  return (
    <UserRow.UserRow
      key={`friend_${friend.id}`}
      className={styles.friend}
      onClick={() => startChat()}
      isActive={activeChatId === friend.id}
      info={
        <UserRow.UserInfo
          name={friend.firstName + ' ' + friend.lastName}
          url={friend.profilePhoto}
        />
      }
    >
      <div>
        {friend.id !== activeChatId && notificationCount > 0 && (
          <NotificationIndicator
            className={styles.notifications}
            count={notificationCount}
          />
        )}
      </div>
    </UserRow.UserRow>
  );
};

export default Friend;
