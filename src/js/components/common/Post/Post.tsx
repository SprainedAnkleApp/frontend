import { KebabMenu, Card } from '..';
import { BsFillChatFill, BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import cx from 'classnames';

import styles from './Post.module.css';
import React, { useState } from 'react';
import { Post as PostType, User } from '../../../models/interfaces';
import { Comments } from '.';
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
  watch,
  className,
  user,
}: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [watched, setWatched] = useState(false);
  const [showComments, setShowComments] = useState(false);
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
        <div className={styles['button-container']}>
          <button
            className={cx(styles['button-icon'], styles.heart, {
              [styles.clicked]: liked,
            })}
            onClick={async () => {
              try {
                if (liked) {
                  deleteReaction(id, 'LIKE');
                  setLiked(false);
                } else {
                  createReaction(id, 'LIKE');
                  setLiked(true);
                }
                // eslint-disable-next-line no-empty
              } catch {}
            }}
          >
            <BsFillHeartFill />
          </button>
          <span className={styles['button-text']}>{reactions}</span>
        </div>
        <div className={styles['button-container']}>
          <button
            className={styles['button-icon']}
            onClick={() => setShowComments((show) => !show)}
          >
            <BsFillChatFill />
          </button>
          <span className={styles['button-text']}>{comments}</span>
        </div>
        <div
          className={cx(styles['button-container'], styles.watch, {
            [styles.clicked]: watched,
          })}
        >
          <button
            className={styles['button-icon']}
            onClick={async () => {
              try {
                if (watched) {
                  deleteReaction(id, 'LOVE');
                  setWatched(false);
                } else {
                  createReaction(id, 'LOVE');
                  setWatched(true);
                }
                // eslint-disable-next-line no-empty
              } catch {}
            }}
          >
            <BsEyeFill />
          </button>
          <span className={styles['button-text']}>{watch}</span>
        </div>
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
