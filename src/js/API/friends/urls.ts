export const getFriendsUrl = (pageNumber: number, pageSize: number): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/me/friends?pageNumber=${pageNumber}&pageSize=${pageSize}`;

export const getPendingFriendsPaginatedUrl = (
  pageNumber: number,
  pageSize: number
): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/me/friends/pending?pageNumber=${pageNumber}&pageSize=${pageSize}`;

export const acceptFriendUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/users/accept`;

export const addFriendUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/users/add`;

export const rejectFriendUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/users/reject`;
