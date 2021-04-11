import Card from '../common/Card';
import { Avatar } from '../common';

import styles from './NewPost.module.css';

const NewPost = ({ user }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <Avatar url={user.photoUrl} />
        <input type="text" placeholder={'O czym myślisz'} className={styles.input} />
      </div>
    </Card>
  );
};

export default NewPost;
