import { RiLandscapeFill } from 'react-icons/ri';
import { IoMdChatboxes } from 'react-icons/io';
import { MdMap } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import cx from 'classnames';

import styles from './PageNavigation.module.css';

const PageNavigation = ({ selected }) => {
  return (
    <div className={styles.navigation}>
      <div className={cx(styles.icon, { [styles.selected]: selected === 'home' })}>
        <AiFillHome />
      </div>
      <div className={cx(styles.icon, { [styles.selected]: selected === 'map' })}>
        <MdMap />
      </div>
      <div className={cx(styles.icon, { [styles.selected]: selected === 'chat' })}>
        <IoMdChatboxes />
      </div>
      <div className={cx(styles.icon, { [styles.selected]: selected === 'landscape' })}>
        <RiLandscapeFill />
      </div>
    </div>
  );
};

export default PageNavigation;
