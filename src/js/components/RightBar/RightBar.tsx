import { UserInfo, Logout } from '.';

import styles from './RightBar.module.css';
import React, { useContext } from 'react';
import { Achievements } from './Achievements';
import { useLocation } from 'react-router';
import { ChatWindow } from '../common/ChatWindow';
import { Icon } from '../common';

import cx from 'classnames';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/CurrentUser';

export type RightBarProps = {
  activeChatId: number | null;
  closeChat: () => void;
  headerStyles?: string;
  newPeakReached: number;
};

const RightBar = ({
  activeChatId,
  closeChat,
  headerStyles,
  newPeakReached,
}: RightBarProps) => {
  const location = useLocation<Location>();
  const { user } = useContext(userContext);

  return (
    <>
      <Link to={'/profile/' + user.id} className={styles.toggleIconWrapper}>
        <Icon url={user.profilePhoto} variant="m" />
      </Link>
      <div className={styles.pane}>
        <div
          className={cx([headerStyles, styles.userInfoWrapper], {
            [styles.selected]: location.pathname.split('/')[1] === 'profile',
          })}
        >
          <div className={styles.userInfo}>
            <UserInfo />
          </div>
          <Logout />
        </div>
        <Achievements newPeakReached={newPeakReached} />
        {location.pathname !== '/chat' && activeChatId !== null && (
          <ChatWindow
            activeChatId={activeChatId}
            className={styles.chat}
            onClose={closeChat}
            small
          />
        )}
      </div>
    </>
  );
};

export default RightBar;
