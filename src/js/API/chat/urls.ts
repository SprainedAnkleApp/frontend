export const sendMessageUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/chat`;

export const getMessagesSocketUrl = (): string =>
  `${process.env.REACT_APP_API_URL}websocket_chat`;
