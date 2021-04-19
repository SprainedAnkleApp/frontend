import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';

const Header = ({ user }) => {
  return (
    <div className={styles.header}>
      <SearchBar />
      <NavBar />
      <UserInfo user={user} />
    </div>
  );
};

export default Header;
