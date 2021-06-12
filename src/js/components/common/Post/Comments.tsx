import { Comment as CommentType } from '../../../models/interfaces';
import React, { useContext, useState } from 'react';
import { Icon } from '..';
import { userContext } from '../../../contexts/CurrentUser';

import styles from './Comments.module.css';

const AddComment = () => {
  const { user } = useContext(userContext);
  const [userInput, setUserInput] = useState('');

  return (
    <div className={styles.addWrapper}>
      <input
        type="text"
        value={userInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserInput(e.target.value);
        }}
      />
    </div>
  );
};

export type CommentsProps = {
  comments: CommentType[];
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className={styles.comments}>
      {comments.map((comment, index) => (
        <div className={styles.commentWrapper} key={'Comment_' + index}>
          <Icon url={comment.user.profilePhoto} />
          <div className={styles.textWrapper}>
            <p className={styles.userName}>
              {comment.user.firstName + ' ' + comment.user.lastName}
            </p>
            <p className={styles.content}> {comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
