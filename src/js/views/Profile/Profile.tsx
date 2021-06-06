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
} from '../../components/Profile/index';
import { getUserById } from '../../API/user/methods';
import { userContext } from '../../contexts/CurrentUser';
import { Posts } from '../../components/common/Post';
import { getUsersFriends } from '../../API/friends/methods';

export type profileTabs = 'posts' | 'achievements' | 'friends';

export type ProfileProps = {
  className: string;
};

const Profile = ({ className }: ProfileProps) => {
  const { user } = useContext(userContext);
  const { userId } = useParams<{ userId: string }>();
  const [profileUser, setProfileUser] = useState<
    User | Record<string, never>
  >();
  const [state, setState] = useState<profileTabs>('posts');

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
    <div className={className} id="postsScroll">
      <ProfileUserCard
        profileUserName={profileUser?.firstName + ' ' + profileUser?.lastName}
        profilePhoto={profileUser?.profilePhoto}
      />
      <ProfileNavBar state={state} setState={setState} />
      <div>
        {state === 'posts' && (
          <Posts
            className={styles.central}
            postsFetcher={getPostsPaginated(10)}
          ></Posts>
        )}
        {state === 'achievements' && <ProfileAchievements />}
        {state === 'friends' && (
          <ProfileFriends
            key={userId}
            friendsFetcher={getUsersFriends(userId, 10)}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
