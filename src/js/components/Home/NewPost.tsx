import { Icon, Card, SubmitButton } from '../common';
import styles from './NewPost.module.css';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { userContext } from '../../contexts/CurrentUser';
import Popup from 'reactjs-popup';
import { createNewPost } from '../../API/wall/methods';

const NewPost = () => {
  const { user } = useContext(userContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const [postText, setPostText] = useState('');
  const [error, setError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      setOffset(cardRef.current.clientHeight);
      setWidth(cardRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      if (cardRef.current) {
        setOffset(cardRef.current.clientHeight);
        setWidth(cardRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [cardRef]);

  const PopupTriggerCard = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div ref={ref} {...props}>
        <Card.Card ref={cardRef}>
          <div className={styles.wrapper}>
            <Icon url={user.profilePhoto} />
            <div className={styles.input}>O czym myślisz</div>
          </div>
        </Card.Card>
      </div>
    );
  });

  const sendNewPost = async () => {
    try {
      console.log('I sent request');
      setButtonDisabled(true);
      await createNewPost(postText);
    } catch (error) {
      setError(true);
    }
  };

  PopupTriggerCard.displayName = 'NewPostInactive';

  const contentStyle = {
    zIndex: 6,
  };
  const overlayStyle = {
    zIndex: 5,
    background: 'rgba(255, 255, 255, 0.2)',
    filter: 'blur(1px)',
  };

  // TODO enhance positioning of modal and watch resize events
  return (
    <div className={styles.main}>
      <Popup
        trigger={<PopupTriggerCard />}
        position="bottom center"
        arrow={false}
        offsetY={-offset}
        className="my-popup"
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
      >
        {(_close: () => void, isOpen: boolean) => {
          useEffect(() => {
            if (!isOpen) return;
            const rootDiv = document.getElementById('root');
            if (!rootDiv) return;
            rootDiv.style.filter = 'blur(1px)';

            return () => {
              if (!isOpen) return;
              const rootDiv = document.getElementById('root');
              if (!rootDiv) return;
              rootDiv.style.filter = 'none';
            };
          }, [isOpen]);
          return (
            <div style={{ width: width }}>
              <Card.Card ref={modalRef}>
                <div className={styles.modal}>
                  <Icon url={user.profilePhoto} className={styles.icon} />
                  <textarea
                    placeholder={'O czym myślisz?'}
                    className={styles.textarea}
                    value={postText}
                    onChange={(event) => {
                      setPostText(event.target.value);
                      setError(false);
                      setButtonDisabled(false);
                    }}
                  />
                  <SubmitButton
                    text={error ? 'Wystapił błąd' : 'Opublikuj'}
                    className={styles.submitButton}
                    progress={error ? 'error' : 'success'}
                    onClick={sendNewPost}
                    disabled={buttonDisabled}
                  />
                </div>
              </Card.Card>
            </div>
          );
        }}
      </Popup>
    </div>
  );
};

export default NewPost;
