import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';
import React from 'react';
import { User } from '../../../models/interfaces';

export type HeaderProps = {
  searchTerm: string;
  onChangeSearchTerm: (term: string) => void;
};

const Header = ({ searchTerm, onChangeSearchTerm }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <SearchBar value={searchTerm} onChange={onChangeSearchTerm} />
      <NavBar />
      <UserInfo />
    </div>
  );
};

export default Header;
