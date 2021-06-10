import { Card } from '..';
import { BsFillChatFill, BsFillHeartFill } from 'react-icons/bs';
import cx from 'classnames';

import styles from './Post.module.css';
import React, { useState, useContext } from 'react';
import { Post as PostType, User } from '../../../models/interfaces';
import { Comments, PostButton } from '.';
import { createReaction, deleteReaction } from '../../../API/reactions/methods';
import { userContext } from '../../../contexts/CurrentUser';
import useModalRescuer from '../../../hooks/useModalRescuer';
import MapWithMarker from '../MapWithMarker';
import { useHistory } from 'react-router';

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
  peak,
}: PostProps) => {
  const { user: currentUser } = useContext(userContext);
  const [liked, setLiked] = useState(
    reactions.find((reaction) => reaction.userId === currentUser.id)
      ? true
      : false
  );
  const [likesCount, setLikesCount] = useState(reactions.length);

  const [showComments, setShowComments] = useState(false);
  const { openModal, rescuer } = useModalRescuer();
  const history = useHistory();

  const likePost = async () => {
    try {
      if (liked) {
        await deleteReaction(id, { type: 'LOVE', userId: currentUser.id });
        setLiked(false);
        setLikesCount((count) => count - 1);
      } else {
        await createReaction(id, { type: 'LOVE', userId: currentUser.id });
        setLiked(true);
        setLikesCount((count) => count + 1);
      }
    } catch (e) {
      openModal();
    }
  };

  const redirectToPeak = (peakId: string) => {
    history.push({
      pathname: `/peaks/${peakId}`,
    });
  };

  return (
    <Card.Card className={className}>
      {/* TODO add timestamp */}
      <Card.Header
        timestamp={timestamp}
        user={user as User}
        active={true}
        rightPart={
          peak && (
            <div
              className={cx(styles['peak-text'], {
                [styles.withBottomMargin]: content,
              })}
              onClick={() => redirectToPeak(peak.id)}
            >
              {peak.name}
            </div>
          )
        }
      />
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
          className={cx(styles['button-container'], { [styles.heart]: liked })}
          onClick={likePost}
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
      {rescuer}
    </Card.Card>
  );
};

export default Post;
