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
      <Icon url={user?.profilePhoto} variant="s" />
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
    <div>
      {comments.map((comment, index) => (
        <div key={'Comment_' + index}>
          <Icon url={comment.user.profilePhoto} />
          <div>
            <p>{comment.user.firstName + ' ' + comment.user.lastName}</p>
            <p> {comment.text}</p>
          </div>
        </div>
      ))}
      <AddComment />
    </div>
  );
};

export default Comments;
