export const getPostsUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/wallitems`;

export const getPaginatedPostsUrl = (page: number, pageSize: number): string =>
  getPostsUrl() + `?pageNumber=${page}&pageSize=${pageSize}`;

export const createNewPostUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/posts/post`;

export const createNewPhotoPostUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/photos/photo`;

export const createNewPeakPostUrl = (peakId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peak/${peakId}/posts`;
