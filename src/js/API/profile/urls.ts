export const getProfilePostsUrl = (userId: number): string =>
  `${process.env.REACT_APP_API_URL}api/public/wallitems/${userId}`;

export const getProfilePaginatedPostsUrl = (
  userId: number,
  page: number,
  pageSize: number
): string =>
  getProfilePostsUrl(userId) + `?pageNumber=${page}&pageSize=${pageSize}`;

export const getCurrentUserUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/me`;
