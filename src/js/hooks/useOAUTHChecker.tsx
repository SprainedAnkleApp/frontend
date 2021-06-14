import { useEffect } from 'react';
import { useHistory } from 'react-router';

const getUrlParam = (name: string, url: string) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

  const results = regex.exec(url);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const useOAUTHChecker = () => {
  const history = useHistory();

  useEffect(() => {
    const token = getUrlParam('token', window.location.href);
    if (token) {
      localStorage.setItem('userInfo', JSON.stringify('Bearer ' + token));
      history.push({
        pathname: `/Home`,
      });
    }
  }, []);
};

export default useOAUTHChecker;
