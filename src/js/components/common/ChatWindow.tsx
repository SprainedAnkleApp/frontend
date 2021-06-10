import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
  Ref,
} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import style from './ChatWindow.module.css';
import { Card } from '.';
import { userContext } from '../../contexts/CurrentUser';
import { User, Message } from '../../models/interfaces';
import { RiSendPlaneFill } from 'react-icons/ri';
import { getMessages } from '../../API/chat/methods';

import cx from 'classnames';
import { getMessagesSocketUrl, sendMessageUrl } from '../../API/chat/urls';
import authHeader from '../../API/auth/methods';

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

  const sendMessage = () => {
    const message = {
      message: currentMessage,
      sendTo: activeChatId ?? 0,
      senderId: user.id,
    };
    console.log(stompClient);
    stompClient.current &&
      stompClient.current.send('/api/chat/', {}, JSON.stringify(message));
    console.log('Sent message');
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await getMessages(user.id);
      setMessages(fetchedMessages);
    };
    connect();
    fetchMessages();
    return () => {
      stompClient.current && stompClient.current.disconnect(onDisconnect);
      socket.current && socket.current.close();
    };
  }, []);

  // const sendMessage = async () => {
  //   // clientRef?.current?.sendMessage(
  //   //   sendMessageUrl(),
  //   //   JSON.stringify({
  //   //     name: this.state.name,
  //   //     message: this.state.typedMessage,
  //   //   })
  //   // );
  //   // TODO here will be send message url
  //   console.log('Message sent');
  //   // try {
  //   //   // eslint-disable-next-line no-empty
  //   // } catch (e) {}
  // };

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
        <RiSendPlaneFill className={style.sendIcon} onClick={sendMessage} />
      </div>
    </Card.Card>
  );
};

export default ChatWindow;
