import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const OAuthHandler = () => {
  const location = useLocation<Location>();

  const getUrlParam = (name: string) => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const token = getUrlParam('token');
  if (token && token.length == 2) {
    localStorage.setItem('userInfo', JSON.stringify('Bearer ' + token[1]));
  } else {
    localStorage.setItem('userInfo', JSON.stringify('Bearer ' + token));
  }
  const error = getUrlParam('error');

  return (
    <Redirect
      to={{
        pathname: token ? '/Home' : '/login',
        state: { from: location, error: error },
      }}
    />
  );
};

export default OAuthHandler;
