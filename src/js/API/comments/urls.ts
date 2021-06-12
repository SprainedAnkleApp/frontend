export const getCommentUrl = (wallitemId: number): string =>
  `${process.env.REACT_APP_API_URL}api/public/posts/${wallitemId}/comments`;
