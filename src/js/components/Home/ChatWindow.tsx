import React, { useContext, useState, useEffect } from 'react';

import style from './ChatWindow.module.css';
import { Card } from '../common';
import { userContext } from '../../contexts/CurrentUser';
import { User, Message } from '../../models/interfaces';
import { RiSendPlaneFill } from 'react-icons/ri';
import { getMessages } from '../../API/chat/methods';

import cx from 'classnames';

export type ChatWindowProps = Partial<React.PropsWithoutRef<HTMLDivElement>> & {
  onClose?: () => void;
};
const ChatWindow = ({ onClose, className }: ChatWindowProps) => {
  const { user } = useContext(userContext);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const mapMessageToMessageField = (message: Message) => {
    return (
      <div
        className={cx(style.message, {
          [style.myMessage]: message.senderId == user.id,
        })}
      >
        {message.content}
      </div>
    );
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await getMessages(user.id);
      setMessages(fetchedMessages);
    };
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    try {
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };

  return (
    <Card.Card className={cx(className, style.main)}>
      <Card.Header
        rightPart={
          onClose && (
            <button onClick={onClose} className={style.close}>
              &times;
            </button>
          )
        }
        user={user as User}
        active={true}
      />
      <div className={style.messages}>
        {messages.map(mapMessageToMessageField)}
      </div>
      <div className={style.textInput}>
        <input
          type="text"
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
        />
        <RiSendPlaneFill className={style.sendIcon} onClick={sendMessage} />
      </div>
    </Card.Card>
  );
};

export default ChatWindow;
