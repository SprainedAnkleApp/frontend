import React, { useEffect, useState, useMemo } from 'react';
import { User } from '../../models/interfaces';
import { useParams } from 'react-router';
import styles from './Profile.module.css';
import { getProfilePostsPaginated } from '../../API/profile/methods';
import {
  ProfileUserCard,
  ProfileAchievements,
  ProfileFriends,
} from '../../components/Profile/index';
import { SectionNavBar } from '../../components/common';
import { getUserById } from '../../API/user/methods';
import { Posts } from '../../components/common/Post';
import { getUsersFriends } from '../../API/friends/methods';

export type profileTabs = 'posts' | 'achievements' | 'friends';

export type ProfileProps = {
  className: string;
};

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const [profileUser, setProfileUser] = useState<
    User | Record<string, never>
  >();
  const [state, setState] = useState<profileTabs>('posts');
  const possibleStates = useMemo(
    () => ({
      posts: 'Posty',
      achievements: 'Osiągnięcia',
      friends: 'Znajomi',
    }),
    []
  );

  const fetchUser = async () => {
    const user = await getUserById(userId);
    setProfileUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  return (
    <div id="postsScroll">
      <ProfileUserCard profileUser={profileUser} fetchUser={fetchUser} />
      <SectionNavBar
        state={state}
        setState={setState}
        possibleStates={possibleStates}
      />
      <div>
        {state === 'posts' && (
          <Posts
            className={styles.central}
            postsFetcher={getProfilePostsPaginated(parseInt(userId, 10), 10)}
            scrollId="postsScroll"
          ></Posts>
        )}
        {state === 'achievements' && <ProfileAchievements userId={userId} />}
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
