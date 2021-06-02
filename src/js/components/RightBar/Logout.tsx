import React, { useState, useRef } from 'react';
import { KebabMenu } from '../common';
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { logout } from '../../API/auth/methods';

import styles from './Logout.module.css';

const Logout = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const history = useHistory();
  const logoutAndRedirect = () => {
    logout();
    history.push({
      pathname: '/login',
    });
  };
  return (
    <>
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
    </>
  );
};

export default Logout;
