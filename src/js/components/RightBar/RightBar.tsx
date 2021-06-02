import { UserInfo } from '.';

import styles from './RightBar.module.css';
import React from 'react';
import { Achievements } from './Achievements';
import { useLocation } from 'react-router';
import { ChatWindow, KebabMenu } from '../common';

import cx from 'classnames';

export type RightBarProps = {
  activeChatId: number | null;
  closeChat: () => void;
  headerStyles?: string;
};

const RightBar = ({ activeChatId, closeChat, headerStyles }: RightBarProps) => {
  const location = useLocation<Location>();
  return (
    <div className={styles.pane}>
      <div className={cx(headerStyles, styles.userInfoWrapper)}>
        <div className={styles.userInfo}>
          <UserInfo />
        </div>
        <KebabMenu />
      </div>
      <Achievements />
      {location.pathname !== '/chat' && activeChatId !== null && (
        <ChatWindow
          activeChatId={activeChatId}
          className={styles.chat}
          onClose={closeChat}
          small
        />
      )}
    </div>
  );
};

export default RightBar;
