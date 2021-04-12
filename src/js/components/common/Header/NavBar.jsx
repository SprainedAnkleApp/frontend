import { RiLandscapeFill } from 'react-icons/ri';
import { IoMdChatboxes } from 'react-icons/io';
import { MdMap } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import cx from 'classnames';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ selected }) => {
  return (
    <div className={styles.navigation}>
      <Link to={'/'}>
        <div className={cx(styles.icon, { [styles.selected]: selected === 'home' })}>
          <AiFillHome />
        </div>
      </Link>
      <div className={cx(styles.icon, { [styles.selected]: selected === 'map' })}>
        <MdMap />
      </div>
      <div className={cx(styles.icon, { [styles.selected]: selected === 'chat' })}>
        <IoMdChatboxes />
      </div>
      <Link to={'/peaks'}>
        <div className={cx(styles.icon, { [styles.selected]: selected === 'landscape' })}>
          <RiLandscapeFill />
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
