import React from 'react';
import styles from './FriendCard.module.css';
import { Card } from '../common';
import { User as UserType } from '../../models/interfaces';
import { Link } from 'react-router-dom';

const FriendCard = ({
  id,
  login,
  firstName,
  lastName,
  email,
  profilePhoto,
}: UserType) => {
  return (
    <div className={styles.friendCard}>
      <Link to={'/profile/' + id} className={styles.posts}>
        <Card.Card className={styles.card}>
          <img src={profilePhoto} className={styles.profileImg} />
          <div className={styles.usernameBox}>
            <p className={styles.username}>{firstName + ' ' + lastName}</p>
          </div>
        </Card.Card>
      </Link>
    </div>
  );
};

export default FriendCard;
