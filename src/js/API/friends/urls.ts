export const getUsersFriendsUrl = (
  userId: string,
  page: number,
  pageSize: number
): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/${userId}/friends?pageNumber=${page}&pageSize=${pageSize}`;

export const getFriendsUrl = (pageNumber: number, pageSize: number): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/me/friends?pageNumber=${pageNumber}&pageSize=${pageSize}`;

export const getPendingFriendsPaginatedUrl = (
  pageNumber: number,
  pageSize: number
): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/me/friends/pending?pageNumber=${pageNumber}&pageSize=${pageSize}`;

export const acceptFriendUrl = (id: number): string =>
  `${process.env.REACT_APP_API_URL}api/users/${id}/accept`;

export const addFriendUrl = (id: number): string =>
  `${process.env.REACT_APP_API_URL}api/users/${id}/add`;

export const rejectFriendUrl = (id: number): string =>
  `${process.env.REACT_APP_API_URL}api/users/${id}/reject`;
