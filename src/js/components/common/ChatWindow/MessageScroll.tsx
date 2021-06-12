import React, { useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { Message, ExtendedMessage } from '../../../models/interfaces';
import usePaginatedData from '../../../hooks/usePaginatedData';
import { getMessagesPaginated } from '../../../API/chat/methods';

import cx from 'classnames';

import style from './MessageScroll.module.css';

type MessageScrollProps = {
  activeChatId: number;
  userId: number;
  messages: Message[];
  receiveMessages: (messages: Message[]) => void;
};

const MessageScroll = ({
  activeChatId,
  userId,
  messages,
  receiveMessages,
}: MessageScrollProps) => {
  const filter = (newData: ExtendedMessage[]) => {
    return newData.filter(
      (record) => record.id < (data[data.length - 1]?.id ?? record.id + 1)
    );
  };

  const { data, nextPage, hasMore } = usePaginatedData<ExtendedMessage>(
    getMessagesPaginated(activeChatId, 15),
    filter
  );

  useEffect(() => {
    receiveMessages(data);
  }, [data]);

  return (
    <div className={style.messages} id="messagesScroll">
      <InfiniteScroll
        dataLength={data.length}
        next={nextPage}
        hasMore={hasMore}
        scrollableTarget="messagesScroll"
        loader={<h4>Loading...</h4>}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        inverse
      >
        {messages.map((message, index) => (
          <div
            key={`messageNr_${index}`}
            className={cx(style.message, {
              [style.myMessage]: message.senderId == userId,
            })}
          >
            {message.content}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MessageScroll;
