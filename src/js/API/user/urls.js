export const getCurrentUserUrl = () => `${process.env.REACT_APP_API_URL}api/public/users`;

export const getUserWithIdUrl = (id) => `${process.env.REACT_APP_API_URL}api/public/users/${id}`;
