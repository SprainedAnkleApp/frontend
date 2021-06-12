import { Comment as CommentType } from '../../../models/interfaces';
import React from 'react';
import { Icon } from '..';

import styles from './Comments.module.css';

export type CommentsProps = {
  comments: CommentType[];
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className={styles.comments}>
      {comments.map((comment, index) => (
        <div className={styles.commentWrapper} key={'Comment_' + index}>
          <Icon url={comment.user.profilePhoto} variant={'s'} />
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
