export const getUsersFriendsUrl = (
  userId: string,
  page: number,
  pageSize: number
): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/${userId}/friends?pageNumber=${page}&pageSize=${pageSize}`;
