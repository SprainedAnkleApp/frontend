import Routes from './js/routes';
import { userContext } from './js/contexts/CurrentUser';
import React, { useState, useEffect } from 'react';
import { getCurrentUser } from './js/API/user/methods';
import { logout, isAuthenticated } from './js/API/auth/methods';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  const fetchCurrentUser = async () => {
    try {
      console.log('Fetching user');
      const fetchedUser = await getCurrentUser();
      if (!fetchedUser) {
        throw 'User not found';
      }
      console.log('Fetched user', fetchedUser);

      setCurrentUser(fetchedUser);
    } catch (e) {
      logout();
    }
  };
  console.log('Refresh');

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
