import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';
import React from 'react';
import { User } from '../../../models/interfaces';

export type HeaderProps = {
  user: User;
  searchTerm: string;
  onChangeSearchTerm: (term: string) => void;
};

const Header = ({ user, searchTerm, onChangeSearchTerm }) => {
  return (
    <div className={styles.header}>
      <SearchBar value={searchTerm} onChange={onChangeSearchTerm} />
      <NavBar />
      <UserInfo user={user} />
    </div>
  );
};

export default Header;
