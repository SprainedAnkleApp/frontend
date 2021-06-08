import React, { useState, useEffect } from 'react';
import { getCurrentUser } from './js/API/user/methods';
import { logout, isAuthenticated } from './js/API/auth/methods';
import { userContext } from './js/contexts/CurrentUser';
import Routes from './js/routes';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

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
        logoutUser: () => setCurrentUser({}),
        loginUser: () => fetchCurrentUser(),
      }}
    >
      <Routes />
    </userContext.Provider>
  );
};
export default App;
