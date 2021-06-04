import { Card } from '..';
import { BsFillChatFill, BsFillHeartFill } from 'react-icons/bs';
import cx from 'classnames';

import styles from './Post.module.css';
import React, { useState } from 'react';
import { Post as PostType, User, Reaction } from '../../../models/interfaces';
import { Comments, PostButton } from '.';
import { createReaction, deleteReaction } from '../../../API/reactions/methods';
import useModalRescuer from '../../../hooks/useModalRescuer';
import MapWithMarker from '../MapWithMarker';

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
  latitude,
  longitude,
}: PostProps) => {
  const [liked, setLiked] = useState(
    reactions.find((reaction) => reaction === 'LIKE') ? true : false
  );

  const [showComments, setShowComments] = useState(false);
  const { openModal, rescuer } = useModalRescuer();

  const reactionToggle = (
    state: boolean,
    setState: (state: boolean) => void,
    reaction: Reaction
  ) => async () => {
    try {
      if (state) {
        await deleteReaction(id, reaction);
        setState(false);
      } else {
        await createReaction(id, reaction);
        setState(true);
      }
    } catch (e) {
      openModal();
    }
  };
  return (
    <Card.Card className={className}>
      {/* TODO add timestamp */}
      <Card.Header timestamp={timestamp} user={user as User} active={true} />
      <div className={styles.content}>
        {content && (
          <span
            className={cx(styles['content-text'], {
              [styles.withBottomMargin]:
                signedUrl || (latitude !== 0.0 && longitude !== 0.0),
            })}
          >
            {content}
          </span>
        )}
        {latitude !== 0.0 && longitude !== 0.0 && (
          <MapWithMarker
            center={[latitude, longitude]}
            className={cx({
              [styles.withBottomMargin]: signedUrl,
            })}
          />
        )}
        {signedUrl && (
          <img src={signedUrl} alt="post content" className={styles.photo} />
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
      </div>
      {showComments && (
        <div>
          <Comments comments={comments ?? []} />
        </div>
      )}
      {rescuer}
    </Card.Card>
  );
};

export default Post;
