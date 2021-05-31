// export const getPostsUrl = (): string =>
//   `${process.env.REACT_APP_API_URL}api/public/wallitems`;

// TODO add real paginated post api from backend
export const getPostsUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/wallitems`;

export const getPaginatedPostsUrl = (page: number, pageSize: number): string =>
  getPostsUrl() + `?pageNumber=${page}&pageSize=${pageSize}`;

export const createNewPostUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/posts/post`;
