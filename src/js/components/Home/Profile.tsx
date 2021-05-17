import styles from './Posts.module.css';
import { Post } from '.';
import { getPostsPaginated } from '../../API/wall/methods';
import { Post as PostType } from '../../models/interfaces';
import React from 'react';
import { Card } from '../common';
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
