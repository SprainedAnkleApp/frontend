import { RiLandscapeFill } from 'react-icons/ri';
import { IoMdChatboxes } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
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
  users: 4,
};

const NavBar = () => {
  const location = useLocation<Location>();

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
          <div className={styles.iconWrapper}>
            <AiFillHome />
          </div>
        </div>
      </Link>

      <Link to={'/chat'}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.chat,
          })}
        >
          <div className={styles.iconWrapper}>
            <IoMdChatboxes />
          </div>
        </div>
      </Link>

      <Link to={'/peaks'}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.peaks,
          })}
        >
          <div className={styles.iconWrapper}>
            <RiLandscapeFill />
          </div>
        </div>
      </Link>
      <Link to={'/users'}>
        <div
          className={cx(styles.icon, {
            [styles.selected]: getNavBarState() === states.users,
          })}
        >
          <div className={styles.iconWrapper}>
            <BsFillPeopleFill />
          </div>
        </div>
      </Link>
      {/* 
      <div
        className={cx(styles.slide, styles[`slide${getNavBarState()}`])}
      ></div> */}
    </div>
  );
};

export default NavBar;
