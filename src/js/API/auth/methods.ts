import axios from 'axios';
import { getLoginUrl, getSignUpUrl } from './urls';
import { Credentials } from '../../models/interfaces';

// TODO very bad jwt, it is stored in local storage and as such prone to xss
// Think about better method of jwt storing
export const login = async ({
  login,
  password,
}: Credentials): Promise<void> => {
  try {
    const response = await axios.post(getLoginUrl(), {
      username: login,
      password: password,
    });
    if (response.headers.authorization) {
      localStorage.setItem(
        'userInfo',
        JSON.stringify(response.headers.authorization)
      );
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

export const logout = (): void => {
  localStorage.removeItem('userInfo');
};

export type AuthHeader = {
  Authorization?: string;
};

export default function authHeader(): AuthHeader {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    return { Authorization: JSON.parse(userInfo) };
  } else {
    return {};
  }
}

export const isAuthenticated = (): boolean => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? true : false;
};

// TODO type this function correctly
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const signUp = async ({
  username,
  password,
  matchingPassword,
}: {
  username: string;
  password: string;
  matchingPassword: string;
}) => {
  const firstName = username + ' firstname';
  const lastName = username + ' lastname';
  const email = username + ' email@gmail.com';
  const gender = 'Male';

  try {
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
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
