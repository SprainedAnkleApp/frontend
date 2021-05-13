import { Icon, Card } from '../common';

import styles from './NewPost.module.css';
import React, { useContext } from 'react';
import { userContext } from '../../contexts/CurrentUser';

const NewPost = () => {
  const { user } = useContext(userContext);
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
