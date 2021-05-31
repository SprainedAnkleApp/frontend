export const getReactionUrl = (postId: number): string =>
  `${process.env.REACT_APP_API_URL}api/public/wallitems/${postId}`;
