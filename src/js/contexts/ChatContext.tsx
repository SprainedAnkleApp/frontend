import React, { ReactNode, useState } from 'react';
import { Message } from '../models/interfaces';

type ProcessMessageFunction = (message: Message) => void;

export type ChatContextType = {
  broadcastMessage: ProcessMessageFunction;
  subscribe: (id: number, callback: (content: string) => void) => void;
  unsubscribe: (id: number, callback: (content: string) => void) => void;
  registerBroker: (
    brokerCallback: (sendTo: number, content: string) => void
  ) => void;
  sendMessage?: (sendTo: number, content: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const ChatContext = React.createContext<ChatContextType>({
  broadcastMessage: noop,
  subscribe: noop,
  registerBroker: noop,
  unsubscribe: noop,
});

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
  const [subscribers] = useState<{
    [key: number]: ((content: string) => void)[];
  }>({});

  const [broker, setBroker] = useState<
    (sendTo: number, content: string) => void | undefined
  >();

  const addSubscriber = (id: number, callback: (content: string) => void) => {
    if (!subscribers[id]) subscribers[id] = [];
    subscribers[id].push(callback);
    console.log('After subscribe', subscribers);
  };

  const removeSubscriber = (
    id: number,
    callback: (content: string) => void
  ) => {
    if (!subscribers[id]) subscribers[id] = [];
    subscribers[id].splice(
      subscribers[id].findIndex((item) => item === callback),
      1
    );
    console.log('After unsubscribe', subscribers);
  };

  const notifySubscribers = (message: Message) => {
    if (!subscribers[message.senderId]) return;
    subscribers[message.senderId].forEach((callback) =>
      callback(message.content)
    );
  };

  const registerBroker = (
    callback: (sendTo: number, content: string) => void
  ) => {
    setBroker(() => callback);
  };

  return (
    <ChatContext.Provider
      value={{
        subscribe: addSubscriber,
        unsubscribe: removeSubscriber,
        broadcastMessage: notifySubscribers,
        registerBroker,
        sendMessage: broker,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
