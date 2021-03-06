import { User } from '../models/interfaces';
import React from 'react';

export type userContextType = {
  user: User | Record<string, never>;
  refetchUser: () => void;
  logoutUser: () => void;
  loginUser: () => void;
};

export const userContext = React.createContext<userContextType>({
  user: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  refetchUser: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logoutUser: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loginUser: () => {},
});
