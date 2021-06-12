import styles from './SearchBar.module.css';
import { RiUserSearchFill } from 'react-icons/ri';
import React from 'react';

import cx from 'classnames';

export type SearchBarProps = {
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
};

const SearchBar = ({ value, onChange, className }: SearchBarProps) => {
  return (
    <div className={cx(styles.searchBar, className)}>
      <div className={styles.icon}>
        <RiUserSearchFill className={styles.iconUsersSearch} />
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
