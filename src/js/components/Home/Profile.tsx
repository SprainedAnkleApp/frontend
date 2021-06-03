import React, { useEffect, useState, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { User } from '../../models/interfaces';
import { useParams } from 'react-router';
import styles from './Profile.module.css';
import Post from '../common/Post/Post';
import { Post as PostType } from '../../models/interfaces';
import { getPostsPaginated } from '../../API/wall/methods';
import { ProfileUserCard, ProfileNavBar } from './Profile/index';
import usePaginatedData from '../../hooks/usePaginatedData';
import { getUserAchievementsUrl } from '../../API/achievements/urls';
import { getUserById } from '../../API/user/methods';
import { userContext } from '../../contexts/CurrentUser';
import { Posts } from '../common/Post';
import { Switch, Route, Redirect } from 'react-router';
import { Achievements } from '../Home';
export type ProfileProps = {
  className: string;
};

const Profile = ({ className }: ProfileProps) => {
  const { user } = useContext(userContext);
  const { userId } = useParams<{ userId: string }>();
  const [profileUser, setProfileUser] = useState<
    User | Record<string, never>
  >();

  useEffect(() => {
    if (user.id.toString() != userId) {
      const fetchUser = async () => {
        const user = await getUserById(userId);
        setProfileUser(user);
      };
      fetchUser();
    } else {
      setProfileUser(user);
    }
  }, []);

  return (
    <div className={className}>
      <ProfileUserCard
        profileUserName={profileUser?.firstName + ' ' + profileUser?.lastName}
        profilePhoto={profileUser?.profilePhoto}
      />
      <ProfileNavBar userId={userId} />
      <Switch>
        <Redirect exact from="/profile/:userId" to="/profile/:userId/posts" />
        <Route path="/profile/:userId/posts">
          <Posts
            className={styles.central}
            postsFetcher={getPostsPaginated(10)}
          ></Posts>
        </Route>
        <Route path="/profile/:userId/achievements">
          <Achievements />
        </Route>
        <Route path="/profile/:userId/friends">
          <Posts
            className={styles.central}
            postsFetcher={getPostsPaginated(10)}
          ></Posts>
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;
