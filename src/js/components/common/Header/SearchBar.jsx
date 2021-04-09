import styles from './SearchBar.module.css';
import { RiUserSearchLine } from 'react-icons/ri';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <RiUserSearchLine />
      </div>
      <input type="text" placeholder={'Szukaj'} className={styles.input} />
    </div>
  );
};

export default SearchBar;
