import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './ProfileUserCard.module.css';
import { Card } from '../common';
import { User } from '../../models/interfaces';
import { userContext } from '../../contexts/CurrentUser';

export type ProfileUserCardProps = {
  profileUser: User | Record<string, never> | undefined;
};

const ProfileUserCard = ({ profileUser }: ProfileUserCardProps) => {
  const { user } = useContext(userContext);

  return (
    <div className={styles.profileUserCard}>
      <Card.Card className={styles.card}>
        <div className={styles.upperContainer}>
          <div className={styles.backgroundImg}>
            <img
              src={profileUser?.backgroundPhoto}
              className={cx(styles.backgroundImg, {
                [styles.backgroundImgMe]: user.id == profileUser?.id,
              })}
            />
          </div>
          <div className={styles.profileImg}>
            <img
              src={profileUser?.profilePhoto}
              className={cx(styles.profileImg, {
                [styles.profileImgMe]: user.id == profileUser?.id,
              })}
            />
          </div>
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
