import React, { useContext, useState, useEffect, useCallback } from 'react';

import style from './ChatWindow.module.css';
import { Card } from '..';
import { userContext } from '../../../contexts/CurrentUser';
import { User, Message } from '../../../models/interfaces';
import { RiSendPlaneFill } from 'react-icons/ri';

import cx from 'classnames';
import { ChatContext } from '../../../contexts/ChatContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePaginatedData from '../../../hooks/usePaginatedData';
import { getMessagesPaginated } from '../../../API/chat/methods';

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

  const messageFetcher = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!activeChatId) return () => {};
    getMessagesPaginated(activeChatId, 15);
  }, [activeChatId]);

  const { data, nextPage, hasMore, refetch } = usePaginatedData<Message>(
    messageFetcher
  );

  const { subscribe, unsubscribe, sendMessage } = useContext(ChatContext);

  useEffect(() => {
    // const fetchMessages = async () => {
    //   const fetchedMessages = await getMessages(user.id);
    //   setMessages(fetchedMessages);
    // };
    if (!activeChatId) return;
    // fetchMessages();
    const newMessageHandler = (content: string) =>
      setMessages((messages) =>
        messages.concat([{ content, senderId: activeChatId }])
      );
    subscribe(activeChatId, newMessageHandler);
    return () => unsubscribe(activeChatId, newMessageHandler);
  }, [setMessages, activeChatId]);

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
      <div className={style.messages} id="messagesScroll">
        <InfiniteScroll
          dataLength={data.length}
          next={nextPage}
          hasMore={hasMore}
          scrollableTarget="messagesScroll"
          loader={<h4>Loading...</h4>}
          className={styles.peakScroll}
        >
          {renderFriends()}
        </InfiniteScroll>
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
            if (!sendMessage) return;
            sendMessage(activeChatId, currentMessage);
            setMessages((messages) =>
              messages.concat([{ content: currentMessage, senderId: user.id }])
            );

            setCurrentMessage('');
          }}
        />
      </div>
    </Card.Card>
  );
};

export default ChatWindow;
