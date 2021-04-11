import { Icon, Card } from '../common';

import styles from './NewPost.module.css';

const NewPost = ({ user }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <Icon url={user.photoUrl} />
        <input type="text" placeholder={'O czym myślisz'} className={styles.input} />
      </div>
    </Card>
  );
};

export default NewPost;
