import React, { useState, useEffect } from 'react';
import { getCurrentUser } from './js/API/user/methods';
import { logout, isAuthenticated } from './js/API/auth/methods';
import { userContext } from './js/contexts/CurrentUser';
import Routes from './js/routes';
import { ChatContextProvider } from './js/contexts/ChatContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  const getUrlParam = (name: string) => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    console.log(location.search, results);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  console.log(getUrlParam('token'));

  const fetchCurrentUser = async () => {
    try {
      const fetchedUser = await getCurrentUser();
      if (!fetchedUser) {
        throw 'User not found';
      }
      setCurrentUser(fetchedUser);
    } catch (e) {
      logout();
    }
  };

  useEffect(() => {
    if (!isAuthenticated() || Object.keys(currentUser).length) return;
    fetchCurrentUser();
  });
  return (
    <userContext.Provider
      value={{
        user: currentUser,
        refetchUser: () => fetchCurrentUser(),
        logoutUser: () => setCurrentUser({}),
        loginUser: () => fetchCurrentUser(),
      }}
    >
      <ChatContextProvider>
        <Routes />
      </ChatContextProvider>
    </userContext.Provider>
  );
};
export default App;
