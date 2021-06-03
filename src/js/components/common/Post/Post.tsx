import {
  BsFillChatFill,
  BsFillHeartFill,
  BsEyeFill,
  BsHeart,
} from 'react-icons/bs';
import { Card } from '..';
import cx from 'classnames';

import styles from './Post.module.css';
import React, { useState } from 'react';
import { Post as PostType, User } from '../../../models/interfaces';
import { Comments, PostButton } from '.';
import { createReaction, deleteReaction } from '../../../API/reactions/methods';

export type PostProps = PostType & {
  currentUserId: number;
  className?: string;
};

const Post = ({
  id,
  currentUserId,
  photoPath,
  content,
  timestamp,
  reactions,
  comments,
  className,
  user,
}: PostProps) => {
  const [liked, setLiked] = useState(
    reactions.find(
      (reaction) => reaction.type === 'LIKE' && reaction.userId == currentUserId
    )
      ? true
      : false
  );
  const [watched, setWatched] = useState(
    reactions.find((reaction) => reaction.type === 'LOVE') ? true : false
  );
  const [showComments, setShowComments] = useState(false);

  const [reactionsCount, setReactionsCount] = useState(
    reactions.filter((reaction) => reaction.type === 'LIKE').length
  );

  const reactionToggle = (
    state: boolean,
    setState: (state: boolean) => void,
    reactionType: string
  ) => async () => {
    try {
      if (state) {
        deleteReaction(id, reactionType);
        setState(!state);
      } else {
        createReaction(id, reactionType);
        setState(!state);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };
  return (
    <Card.Card className={className}>
      {/* TODO add timestamp */}
      <Card.Header timestamp={timestamp} user={user as User} active={true} />
      <div className={styles.content}>
        {content && (
          <span
            className={cx(styles['content-text'], {
              [styles.withBottomPadding]: photoPath,
            })}
          >
            {content}
          </span>
        )}
        {photoPath && (
          <img src={photoPath} alt="post content" className={styles.photo} />
        )}
      </div>
      <div className={styles.buttons}>
        <PostButton
          active={liked}
          className={cx(
            styles['button-icon'],
            liked ? styles.heart : styles.inactiveHeart
          )}
          onClick={reactionToggle(
            liked,
            (toggle) => {
              if (toggle) {
                setReactionsCount(reactionsCount + 1);
              } else {
                setReactionsCount(reactionsCount - 1);
              }
              setLiked(toggle);
            },
            'LIKE'
          )}
          icon={liked ? <BsFillHeartFill /> : <BsHeart />}
          count={reactionsCount}
        />
        <PostButton
          active={showComments}
          className={styles['button-container']}
          onClick={() => setShowComments((show) => !show)}
          icon={<BsFillChatFill />}
          count={comments ? comments.length : 0}
        />
        <PostButton
          active={watched}
          className={cx(styles['button-container'], styles.watch)}
          onClick={reactionToggle(watched, setWatched, 'LOVE')}
          icon={<BsEyeFill />}
          count={reactionsCount}
        />
      </div>
      {showComments && (
        <div>
          <Comments comments={comments ?? []} />
        </div>
      )}
    </Card.Card>
  );
};

export default Post;
