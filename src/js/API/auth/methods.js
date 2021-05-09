import axios from 'axios';
import { getLoginUrl, getSignUpUrl } from './urls';

// TODO very bad jwt, it is stored in local storage and as such prone to xss
// Think about better method of jwt storing
export const login = async (login, password) => {
  try {
    const response = await axios.post(getLoginUrl(), {
      username: login,
      password: password,
    });
    if (response.headers.authorization) {
      localStorage.setItem('userInfo', JSON.stringify(response.headers.authorization));
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem('userInfo');
};

export default function authHeader() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
    return { Authorization: userInfo };
  } else {
    return {};
  }
}

export const isAuthenticated = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return userInfo;
};

export const signUp = async ({ username, password, matchingPassword }) => {
  const firstName = username + ' firstname';
  const lastName = username + ' lastname';
  const email = username + ' email@gmail.com';
  const gender = 'Male';

  const response = await axios.post(getSignUpUrl(), {
    username: username,
    password: password,
    matchingPassword: matchingPassword,
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
  });

  return response.data;
};
