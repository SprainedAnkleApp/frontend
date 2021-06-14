import { useEffect, useLayoutEffect } from 'react';

const getUrlParam = (name: string, url: string) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

  const results = regex.exec(url);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const useOAUTHChecker = (loginUser: () => void) => {
  useLayoutEffect(() => {
    const token = getUrlParam('token', window.location.href);
    if (token) {
      localStorage.setItem('userInfo', JSON.stringify('Bearer ' + token));
      loginUser();
      window.open('/Home', '_self');
    }
  }, []);
};

export default useOAUTHChecker;
