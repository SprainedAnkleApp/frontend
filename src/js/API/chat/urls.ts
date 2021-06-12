export const sendMessageWebsocketUrl = (): string => `/api/chat/`;

export const chatFeedWebsocketUrl = (userId: number): string =>
  `/messages/${userId}`;

export const subscribeWebsocketUrl = (): string =>
  `${process.env.REACT_APP_API_URL}websocket_chat`;

export const getMessagesPaginatedUrl = (
  pageNumber: number,
  pageSize: number,
  userId: number
): string =>
  `${process.env.REACT_APP_API_URL}api/chat/${userId}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
