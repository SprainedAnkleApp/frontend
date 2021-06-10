import { NavBar } from '.';

import styles from './Central.module.css';
import React, { useState } from 'react';
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
  newPeakReached: number;
  setNewPeakReached: (state: number) => void;
};

const Central = ({
  activeChatId,
  headerStyles,
  newPeakReached,
  setNewPeakReached,
}: CentralProps) => {
  const [newPostAdded, setNewPostAdded] = useState<number>(0);
  return (
    <div className={styles.pane} id="scroll">
      <div className={headerStyles}>
        <NavBar />
      </div>
      <div className={styles.central}>
        <Switch>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
          <Route path="/users">
            <Users className={styles.fixed} />
          </Route>
          <Route path="/peaks/:id">
            <PeakDetails
              newPeakReached={newPeakReached}
              setNewPeakReached={setNewPeakReached}
            />
          </Route>
          <Route path="/peaks">
            <PeaksList />
          </Route>
          <Route path="/chat">
            <ChatWindow activeChatId={activeChatId} className={styles.fixed} />
          </Route>
          <Route path="/">
            <Posts
              postsFetcher={getPostsPaginated(10)}
              newPostAdded={newPostAdded}
              scrollId="scroll"
            >
              <NewPost setNewPostAdded={setNewPostAdded} />
            </Posts>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Central;
