import { KebabMenu, Card } from '..';
import { BsFillChatFill, BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import cx from 'classnames';

import styles from './Post.module.css';
import React, { useState } from 'react';
import { Post as PostType, User, Reaction } from '../../../models/interfaces';
import { Comments, PostButton } from '.';
import { createReaction, deleteReaction } from '../../../API/reactions/methods';

export type PostProps = PostType & {
  className?: string;
};

const Post = ({
  id,
  photoPath,
  content,
  timestamp,
  reactions,
  comments,
  className,
  user,
}: PostProps) => {
  const [liked, setLiked] = useState(
    reactions.find((reaction) => reaction === 'LIKE') ? true : false
  );
  const [watched, setWatched] = useState(
    reactions.find((reaction) => reaction === 'LOVE') ? true : false
  );
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
      } else {
        createReaction(id, reaction);
        setState(true);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };
  return (
    <Card.Card className={className}>
      {/* TODO add timestamp */}
      <Card.Header
        timestamp={timestamp}
        user={user as User}
        active={true}
        rightPart={<KebabMenu className={styles.kebab} />}
      />
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
          className={cx(styles['button-icon'], styles.heart)}
          onClick={reactionToggle(liked, setLiked, 'LIKE')}
          icon={<BsFillHeartFill />}
          count={reactions.filter((reaction) => reaction === 'LIKE').length}
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
          count={reactions.filter((reaction) => reaction === 'LOVE').length}
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
