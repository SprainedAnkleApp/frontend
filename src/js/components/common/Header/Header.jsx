import { SearchBar, NavBar, UserInfo } from '.';

import styles from './Header.module.css';

const Header = ({ selected, user }) => {
  return (
    <div className={styles.header}>
      <SearchBar />
      <NavBar selected={selected} />
      <UserInfo user={user} />
    </div>
  );
};

export default Header;
