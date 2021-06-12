import React, { useContext, useState, useEffect } from 'react';

import { User, Message } from '../../../models/interfaces';
import { userContext } from '../../../contexts/CurrentUser';

import { Card } from '..';
import { RiSendPlaneFill } from 'react-icons/ri';
import { ChatContext } from '../../../contexts/ChatContext';

import cx from 'classnames';

import style from './ChatWindow.module.css';
import { MessageScroll } from '.';
import { getUserById } from '../../../API/user/methods';

export type ChatWindowProps = Partial<React.PropsWithoutRef<HTMLDivElement>> & {
  activeChatId: number;
  onClose?: () => void;
  small?: boolean;
};
const ChatWindow = ({
  onClose,
  activeChatId,
  className,
  small = false,
}: ChatWindowProps) => {
  const { user } = useContext(userContext);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [fetchedMessages, setFetchedMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState<User | Record<string, never>>({});

  const [currentMessage, setCurrentMessage] = useState('');

  const { subscribe, unsubscribe, sendMessage } = useContext(ChatContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(`${activeChatId}`);
      setSender(user);
    };
    fetchUser();
  }, [activeChatId]);

  useEffect(() => {
    setChatMessages([]);
  }, [activeChatId]);

  useEffect(() => {
    const newMessageHandler = (content: string) =>
      setChatMessages((messages) =>
        [{ content: content, senderId: activeChatId }].concat(messages)
      );
    subscribe(activeChatId, newMessageHandler);
    return () => unsubscribe(activeChatId, newMessageHandler);
  }, [setChatMessages, activeChatId]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sendMessage || !activeChatId || currentMessage === '') return;
    sendMessage(activeChatId, currentMessage);
    setChatMessages((messages) =>
      [{ content: currentMessage, senderId: user.id }].concat(messages)
    );
    setCurrentMessage('');
  };

  if (Object.keys(sender).length <= 0) return null;
  return (
    <Card.Card className={cx(style.main, { [style.small]: small }, className)}>
      <Card.Header
        rightPart={
          onClose && (
            <button onClick={onClose} className={style.close}>
              &times;
            </button>
          )
        }
        user={sender as User}
        active={true}
        className={style.bottomSpace}
      />
      <MessageScroll
        activeChatId={activeChatId}
        userId={user.id}
        messages={chatMessages.concat(fetchedMessages)}
        receiveMessages={setFetchedMessages}
      />
      <div className={style.textInput}>
        <form onSubmit={handleFormSubmit} className={style.omit}>
          <input
            type="text"
            value={currentMessage}
            onChange={(event) => setCurrentMessage(event.target.value)}
          />
          <button type="submit" className={style.omit}>
            <RiSendPlaneFill className={style.sendIcon} />
          </button>
        </form>
      </div>
    </Card.Card>
  );
};

export default ChatWindow;
