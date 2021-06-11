import { useRef, useEffect, useState } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

export type useWebsocketType<T> = {
  isWebsocketActive: boolean;
  connect: (
    subscriptionUrl: string,
    onMessageReceived: (frame: Stomp.Frame) => void
  ) => void;
  sendMessage: (messageUrl: string, body: T) => void;
};

const useWebsocket = <T,>(
  connectionUrl: string,
  handleError?: (error: Stomp.Frame | string) => void
): useWebsocketType<T> => {
  const socket = useRef<null | WebSocket>(null);
  const stompClient = useRef<null | Stomp.Client>(null);
  const [isWebsocketActive, setWebsocketActive] = useState(false);

  useEffect(() => {
    socket.current = new SockJS(
      `${process.env.REACT_APP_API_URL}${connectionUrl}`
    );
    stompClient.current = Stomp.over(socket.current);
    stompClient.current.connect(
      {},
      () => setWebsocketActive(true),
      handleError
    );

    return () => {
      stompClient.current &&
        stompClient.current.disconnect(() => console.log('disconnected'));
      socket.current && socket.current.close();
    };
  }, []);

  const connect = (
    subscriptionUrl: string,
    onMessageReceived: (frame: Stomp.Frame) => void
  ) => {
    stompClient.current &&
      stompClient.current.subscribe(subscriptionUrl, onMessageReceived);
  };

  const sendMessage = (messageUrl: string, body: T) => {
    if (stompClient.current) {
      stompClient.current.send(messageUrl, {}, JSON.stringify({ ...body }));
    }
  };

  return {
    connect,
    isWebsocketActive,
    sendMessage,
  };
};

export default useWebsocket;
