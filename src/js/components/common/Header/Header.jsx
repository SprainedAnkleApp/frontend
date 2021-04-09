import { SearchBar, PageNavigation, UserInfo } from '.';

import styles from './Header.module.css';

const Header = ({ selected }) => {
  return (
    <div className={styles.header}>
      <SearchBar />
      <PageNavigation selected={selected} />
      <UserInfo />
    </div>
  );
};

export default Header;
