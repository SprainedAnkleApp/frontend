import React from 'react';
import { ProfileUserCard, ProfileNavBar } from './Profile/index';

export type ProfileProps = {
  className: string;
};

const Profile = ({ className }: ProfileProps) => {
  return (
    <div className={className}>
      <ProfileUserCard className={className} />
      <ProfileNavBar className={className} />
    </div>
  );
};

export default Profile;
