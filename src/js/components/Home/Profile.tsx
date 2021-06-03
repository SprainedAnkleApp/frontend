import React, { useEffect, useState, useContext } from 'react';
import { User } from '../../models/interfaces';
import { useParams } from 'react-router';
import styles from './Profile.module.css';
import { getPostsPaginated } from '../../API/wall/methods';
import {
  ProfileUserCard,
  ProfileNavBar,
  ProfileAchievements,
  ProfileFriends,
} from './Profile/index';
import { getUserById } from '../../API/user/methods';
import { userContext } from '../../contexts/CurrentUser';
import { Posts } from '../common/Post';
import { Switch, Route, Redirect } from 'react-router';
import { getUsersFriends } from '../../API/friends/methods';

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
  }, [userId]);

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
          <ProfileAchievements />
        </Route>
        <Route path="/profile/:userId/friends">
          <ProfileFriends friendsFetcher={getUsersFriends(userId, 10)} />
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;
