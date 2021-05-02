import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';

const Header = ({ selected, user, searchTerm, onChangeSearchTerm }) => {
  return (
    <div className={styles.header}>
      <SearchBar value={searchTerm} onChange={onChangeSearchTerm} />
      <NavBar selected={selected} />
      <UserInfo user={user} />
    </div>
  );
};

export default Header;
