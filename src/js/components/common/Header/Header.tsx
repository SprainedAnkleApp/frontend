import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';
import React from 'react';
import { User } from '../../../models/interfaces';

export type HeaderProps = {
  user: User;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <SearchBar />
      <NavBar />
      <UserInfo user={user} />
    </div>
  );
};

export default Header;
