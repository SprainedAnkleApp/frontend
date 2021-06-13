import { Comment as CommentType } from '../../../models/interfaces';
import React from 'react';
import { Icon } from '..';

import styles from './Comments.module.css';
import { useHistory } from 'react-router';

export type CommentsProps = {
  comments: CommentType[];
};

const Comments = ({ comments }: CommentsProps) => {
  const history = useHistory();
  const redirectToUser = (userId: number) => {
    history.push({
      pathname: `/profile/${userId}`,
    });
  };

  return (
    <div className={styles.comments}>
      {comments.map((comment, index) => (
        <div className={styles.commentWrapper} key={'Comment_' + index}>
          <div onClick={() => redirectToUser(comment.user.id)}>
            <Icon
              url={comment.user.profilePhoto}
              className={styles.iconAvatar}
              variant={'s'}
            />
          </div>
          <div className={styles.textWrapper}>
            <p
              className={styles.userName}
              onClick={() => redirectToUser(comment.user.id)}
            >
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
