import { NavBar } from '.';

import styles from './Central.module.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import { PeakDetails } from '../../views/Peak';
import { PeaksList } from '../../views/PeaksList';
import { NewPost } from './NewPost';
import { Posts } from '../common/Post';
import { getPostsPaginated } from '../../API/wall/methods';
import { ChatWindow } from '../common';

export type CentralProps = {
  activeChatId: number | null;
  headerStyles?: string;
};

const Central = ({ activeChatId, headerStyles }: CentralProps) => {
  return (
    <div className={styles.pane}>
      <div className={headerStyles}>
        <NavBar />
      </div>
      <div className={styles.central}>
        <Switch>
          <Route path="/peaks/:id">
            <PeakDetails className={styles.central} />
          </Route>
          <Route path="/peaks">
            <PeaksList className={styles.central} />
          </Route>
          <Route path="/chat">
            <ChatWindow
              activeChatId={activeChatId}
              className={styles.central}
            />
          </Route>
          <Route path="/">
            <Posts
              className={styles.central}
              postsFetcher={getPostsPaginated(10)}
            >
              <NewPost />
            </Posts>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Central;
