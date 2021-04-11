import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const OAuthHandler = () => {
  const location = useLocation();

  const getUrlParam = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const token = getUrlParam('token');
  if (token) {
    localStorage.setItem('userInfo', JSON.stringify('Bearer ' + token));
  }
  const error = getUrlParam('error');

  return (
    <Redirect
      to={{ pathname: token ? '/Home' : '/login', state: { from: location, error: error } }}
    />
  );
};

export default OAuthHandler;
