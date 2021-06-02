import styles from './UserInfo.module.css';
import React, { useContext, useState, useRef } from 'react';
import { userContext } from '../../../contexts/CurrentUser';
import { useHistory } from 'react-router';
import { logout } from '../../../API/auth/methods';
import { FiLogOut } from 'react-icons/fi';
import { Icon, KebabMenu } from '..';
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const UserInfo = () => {
  const { user } = useContext(userContext);
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  if (!user) return null;

  const history = useHistory();
  const logoutAndRedirect = () => {
    logout();
    history.push({
      pathname: '/login',
    });
  };
  return (
    <div className={styles.wrapper}>
      <Icon url={user.profilePhoto} />
      <div className={styles.userName}>{user.login}</div>
      <div ref={ref} onClick={() => setOpen(true)} className={styles.kebabMenu}>
        <KebabMenu />
      </div>
      <ControlledMenu
        anchorRef={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <MenuItem className={styles.menuItem} onClick={logoutAndRedirect}>
          <FiLogOut />
          <span className={styles.horizontalMargin}>Wyloguj się</span>
        </MenuItem>
      </ControlledMenu>
    </div>
  );
};

export default UserInfo;
