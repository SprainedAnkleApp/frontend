import { SearchBar } from '.';

import styles from './LeftBar.module.css';
import React, { useState } from 'react';
import { Friends } from './Friends';
import { RiUserSearchFill } from 'react-icons/ri';
import { CSSTransition } from 'react-transition-group';

import cx from 'classnames';

export type LeftBarProps = {
  searchTerm: string;
  onChangeSearchTerm: (term: string) => void;
  startChat: (id: number) => void;
  activeChatId: number | null;
  headerStyles?: string;
};

const LeftBar = ({
  searchTerm,
  onChangeSearchTerm,
  startChat,
  activeChatId,
  headerStyles,
}: LeftBarProps) => {
  const [barVisible, setBarVisible] = useState(false);
  return (
    <>
      <div className={styles.toggleIconWrapper}>
        <div
          className={cx(styles.toggleIcon, { [styles.iconActive]: barVisible })}
        >
          {' '}
          <RiUserSearchFill
            onClick={() => setBarVisible((visible) => !visible)}
          />
        </div>
      </div>
      <CSSTransition
        in={barVisible}
        timeout={1500}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          enterDone: styles['enter-done'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
          exitDone: styles['exit-done'],
        }}
      >
        <div className={styles.pane}>
          <div className={cx(styles.searchBar, headerStyles)}>
            <SearchBar value={searchTerm} onChange={onChangeSearchTerm} />
          </div>
          <Friends
            searchTerm={searchTerm}
            startChat={startChat}
            activeChatId={activeChatId}
          />
        </div>
      </CSSTransition>
    </>
  );
};

export default LeftBar;
