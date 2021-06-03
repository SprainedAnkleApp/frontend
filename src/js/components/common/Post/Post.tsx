import { Card } from '..';
import { BsFillChatFill, BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import cx from 'classnames';

import styles from './Post.module.css';
import React, { useState, useContext } from 'react';
import { Post as PostType, User, Reaction } from '../../../models/interfaces';
import { Comments, PostButton } from '.';
import { createReaction, deleteReaction } from '../../../API/reactions/methods';
import { userContext } from '../../../contexts/CurrentUser';

export type PostProps = PostType & {
  className?: string;
};

const Post = ({
  id,
  signedUrl,
  content,
  timestamp,
  reactions,
  comments,
  className,
  user,
}: PostProps) => {
  const { user: currentUser } = useContext(userContext);
  const [liked, setLiked] = useState(
    reactions.find((reaction) => reaction.userId === currentUser.id)
      ? true
      : false
  );
  const [likesCount, setLikesCount] = useState(reactions.length);
  const [showComments, setShowComments] = useState(false);

  const reactionToggle = (
    state: boolean,
    setState: (state: boolean) => void,
    reaction: Reaction
  ) => async () => {
    try {
      if (state) {
        deleteReaction(id, reaction);
        setState(false);
        setLikesCount((count) => count - 1);
      } else {
        createReaction(id, reaction);
        setState(true);
        setLikesCount((count) => count + 1);
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
              [styles.withBottomPadding]: signedUrl,
            })}
          >
            {content}
          </span>
        )}
        {signedUrl && (
          <img src={signedUrl} alt="post content" className={styles.photo} />
        )}
      </div>
      <div className={styles.buttons}>
        <PostButton
          active={liked}
          className={cx(styles['button-icon'], styles.heart)}
          onClick={reactionToggle(liked, setLiked, {
            type: 'LOVE',
            userId: currentUser.id,
          })}
          icon={<BsFillHeartFill />}
          count={likesCount}
        />
        <PostButton
          active={showComments}
          className={styles['button-container']}
          onClick={() => setShowComments((show) => !show)}
          icon={<BsFillChatFill />}
          count={comments ? comments.length : 0}
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
