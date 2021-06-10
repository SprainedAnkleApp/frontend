import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
  Ref,
} from 'react';

import style from './ChatWindow.module.css';
import { Card } from '.';
import { userContext } from '../../contexts/CurrentUser';
import { User, Message } from '../../models/interfaces';
import { RiSendPlaneFill } from 'react-icons/ri';
import { getMessages } from '../../API/chat/methods';

import cx from 'classnames';

export type ChatWindowProps = Partial<React.PropsWithoutRef<HTMLDivElement>> & {
  activeChatId: number | null;
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await getMessages(user.id);
      setMessages(fetchedMessages);
    };
    fetchMessages();
  }, []);

  if (activeChatId === null) return null;
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
        user={user as User}
        active={true}
        className={style.bottomSpace}
      />
      <div className={style.messages}>
        {messages.map((message, index) => (
          <div
            key={`messageNr_${index}`}
            className={cx(style.message, {
              [style.myMessage]: message.senderId == user.id,
            })}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className={style.textInput}>
        <input
          type="text"
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
        />
        <RiSendPlaneFill
          className={style.sendIcon}
          onClick={() => {
            console.log('sent');
          }}
        />
      </div>
    </Card.Card>
  );
};

export default ChatWindow;
