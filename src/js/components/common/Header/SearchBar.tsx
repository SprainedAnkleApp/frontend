import styles from './SearchBar.module.css';
import { RiUserSearchLine } from 'react-icons/ri';
import React from 'react';

export type SearchBarProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <RiUserSearchLine />
      </div>
      <input
        type="text"
        placeholder={'Szukaj'}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
