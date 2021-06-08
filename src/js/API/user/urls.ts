export const getUsersUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/users`;

export const getUserUrl = (id: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/${id}`;

export const getCurrentUserUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/me`;

export const getSearchUsersPaginatedUrl = (
  pageNumber: number,
  pageSize: number,
  searchTerm: string
): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/search?pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}`;
