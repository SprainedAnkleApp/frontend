import { Icon, Card, SubmitButton } from '../common';

import styles from './NewPost.module.css';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { userContext } from '../../contexts/CurrentUser';
import Popup from 'reactjs-popup';

const NewPost = () => {
  const { user } = useContext(userContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setOffset(cardRef.current.clientHeight);
      setWidth(cardRef.current.clientWidth);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (cardRef.current) {
      setOffset(cardRef.current.clientHeight);
      setWidth(cardRef.current.clientWidth);
    }
  });

  const PopupTriggerCard = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div ref={ref} {...props}>
        <Card ref={cardRef}>
          <div className={styles.wrapper}>
            <Icon url={user.profilePhoto} />
            <div className={styles.input}>O czym myślisz</div>
          </div>
        </Card>
      </div>
    );
  });

  PopupTriggerCard.displayName = 'NewPostInactive';

  // TODO enhance positioning of modal and watch resize events
  return (
    <Popup
      trigger={<PopupTriggerCard />}
      position="bottom center"
      arrow={false}
      offsetY={-offset}
    >
      <div style={{ width: width }}>
        <Card ref={modalRef}>
          <div className={styles.modal}>
            <Icon url={user.profilePhoto} />
            <textarea>O czym myślisz</textarea>
            <SubmitButton text={'Opublikuj'} />
          </div>
        </Card>
      </div>
    </Popup>
  );
};

export default NewPost;
