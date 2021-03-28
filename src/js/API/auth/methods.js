import axios from 'axios';
import { getLoginUrl } from './urls';

// TODO very bad jwt, it is stored in local storage and as such prone to xss
// Think about better method of jwt storing
export const login = (login, password) => {
  return axios
    .post(getLoginUrl(), {
      username: login,
      password: password,
    })
    .then((response) => {
      if (response.headers.authorization) {
        localStorage.setItem('userInfo', JSON.stringify(response.headers.authorization));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('userInfo');
};

export default function authHeader() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo && userInfo.accessToken) {
    return { Authorization: userInfo.accessToken };
  } else {
    return {};
  }
}

export const isAuthenticated = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return userInfo;
};
