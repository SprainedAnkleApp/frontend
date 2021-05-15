import { RiLandscapeFill } from 'react-icons/ri';
import { IoMdChatboxes } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import cx from 'classnames';

import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

type statesType = {
  [name: string]: number;
};

const states: statesType = {
  home: 1,
  chat: 2,
  peaks: 3,
};

const NavBar = () => {
  const location = useLocation();

  const getNavBarState = () => {
    const params = location.pathname.split('/');
    return states[params[1]] ?? states.home;
  };
  return (
    <div className={styles.navigation}>
      <Link to={'/'}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.home,
          })}
        >
          <AiFillHome />
        </div>
      </Link>

      <Link to={'/chat'}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.chat,
          })}
        >
          <IoMdChatboxes />
        </div>
      </Link>

      <Link to={'/peaks'}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.peaks,
          })}
        >
          <RiLandscapeFill />
        </div>
      </Link>

      <div
        className={cx(styles.slide, styles[`slide${getNavBarState()}`])}
      ></div>
    </div>
  );
};

export default NavBar;
