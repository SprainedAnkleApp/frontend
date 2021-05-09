import { Icon, Card } from '../common';

import styles from './NewPost.module.css';
import { User } from '../../models/interfaces';
import React from 'react';

const NewPost = ({ user }: { user: User }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <Icon url={user.profilePhoto} />
        <input
          type="text"
          placeholder={'O czym myślisz'}
          className={styles.input}
        />
      </div>
    </Card>
  );
};

export default NewPost;
