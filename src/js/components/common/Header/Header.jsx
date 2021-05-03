import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';

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
