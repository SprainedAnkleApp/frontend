import React, { useEffect, useState } from 'react';
import { User } from '../../models/interfaces';
import { useParams } from 'react-router';
import styles from './Profile.module.css';
import { getProfilePostsPaginated } from '../../API/profile/methods';
import {
  ProfileUserCard,
  ProfileNavBar,
  ProfileAchievements,
  ProfileFriends,
} from '../../components/Profile/index';
import { getUserById } from '../../API/user/methods';
import { Posts } from '../../components/common/Post';
import { getUsersFriends } from '../../API/friends/methods';

export type profileTabs = 'posts' | 'achievements' | 'friends';

export type ProfileProps = {
  className: string;
};

const Profile = ({ className }: ProfileProps) => {
  const { userId } = useParams<{ userId: string }>();
  const [profileUser, setProfileUser] = useState<
    User | Record<string, never>
  >();
  const [state, setState] = useState<profileTabs>('posts');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(userId);
      setProfileUser(user);
    };
    fetchUser();
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
            postsFetcher={getProfilePostsPaginated(userId, 10)}
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
