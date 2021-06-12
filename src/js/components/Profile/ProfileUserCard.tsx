import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './ProfileUserCard.module.css';
import { Card } from '../common';
import { User } from '../../models/interfaces';
import { userContext } from '../../contexts/CurrentUser';
import {
  postProfilePhoto,
  postBackgroundPhoto,
} from '../../API/profile/methods';
import backgroundPhotoPlaceholder from '../../../images/profile_bg.png';
import profilePhotoPlaceholder from '../../../images/profile_pic.png';

export type ProfileUserCardProps = {
  profileUser: User | Record<string, never> | undefined;
  fetchUser: () => void;
};

const ProfileUserCard = ({ profileUser, fetchUser }: ProfileUserCardProps) => {
  const { user, refetchUser } = useContext(userContext);

  return (
    <div className={styles.profileUserCard}>
      <Card.Card className={styles.card}>
        <div className={styles.upperContainer}>
          <label className={styles.backgroundImg} htmlFor="backgroundUpload">
            <input
              type="file"
              id="backgroundUpload"
              className={styles.inputHidden}
              onChange={(e) =>
                postBackgroundPhoto(
                  e?.target?.files && e.target.files[0],
                  () => {
                    refetchUser();
                    fetchUser();
                  }
                )
              }
            />
            <img
              src={
                profileUser?.backgroundPhoto
                  ? profileUser?.backgroundPhoto
                  : backgroundPhotoPlaceholder
              }
              className={cx(styles.backgroundImg, {
                [styles.backgroundImgMe]: user.id == profileUser?.id,
              })}
            />
          </label>
          <label className={styles.profileImg} htmlFor="profileUpload">
            <input
              type="file"
              id="profileUpload"
              className={styles.inputHidden}
              onChange={(e) =>
                postProfilePhoto(e?.target?.files && e.target.files[0], () => {
                  refetchUser();
                  fetchUser();
                })
              }
            />
            <img
              src={
                profileUser?.profilePhoto
                  ? profileUser?.profilePhoto
                  : profilePhotoPlaceholder
              }
              className={cx(styles.profileImg, {
                [styles.profileImgMe]: user.id == profileUser?.id,
              })}
            />
          </label>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.userNameWrapper}>
            <p className={styles.userName}>
              {profileUser?.firstName + ' ' + profileUser?.lastName}
            </p>
          </div>
        </div>
      </Card.Card>
    </div>
  );
};

export default ProfileUserCard;
