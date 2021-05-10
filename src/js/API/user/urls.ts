export const getUsersUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/users`;

export const getUserUrl = (id: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/users/${id}`;
