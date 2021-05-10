import styles from './SearchBar.module.css';
import { RiUserSearchLine } from 'react-icons/ri';
import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <RiUserSearchLine />
      </div>
      <input
        type="text"
        placeholder={'Szukaj'}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
