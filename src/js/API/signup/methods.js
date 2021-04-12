import axios from 'axios';
import { getSignUpUrl } from './urls';

export const signUp = ({ username, password, matchingPassword }) => {
  const firstName = username + ' firstname';
  const lastName = username + ' lastname';
  const email = username + ' email@gmail.com';
  const gender = 'Male';
  return axios
    .post(getSignUpUrl(), {
      username: username,
      password: password,
      matchingPassword: matchingPassword,
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
    })
    .then((response) => {
      return response.data;
    });
};
