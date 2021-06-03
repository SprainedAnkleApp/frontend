import { SearchBar } from '.';

import styles from './LeftBar.module.css';
import React from 'react';
import { Friends } from './Friends';

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
  return (
    <div className={styles.pane}>
      <div className={headerStyles}>
        <SearchBar value={searchTerm} onChange={onChangeSearchTerm} />
      </div>
      <Friends
        searchTerm={searchTerm}
        startChat={startChat}
        activeChatId={activeChatId}
      />
    </div>
  );
};

export default LeftBar;
