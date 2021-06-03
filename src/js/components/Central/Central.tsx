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
import { Users } from '../../views/Users';
import { Profile } from '../../views/Profile';

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
          <Route path="/profile/:userId">
            <Profile className={styles.central} />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/peaks/:id">
            <PeakDetails />
          </Route>
          <Route path="/peaks">
            <PeaksList />
          </Route>
          <Route path="/chat">
            <ChatWindow activeChatId={activeChatId} className={styles.chat} />
          </Route>
          <Route path="/">
            <Posts postsFetcher={getPostsPaginated(10)}>
              <NewPost />
            </Posts>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Central;
