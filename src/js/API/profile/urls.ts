export const getProfilePostsUrl = (userId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/wallitems/${userId}`;

export const getProfilePaginatedPostsUrl = (
  userId: string,
  page: number,
  pageSize: number
): string =>
  getProfilePostsUrl(userId) + `?pageNumber=${page}&pageSize=${pageSize}`;
