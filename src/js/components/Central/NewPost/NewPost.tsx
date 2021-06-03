import { Icon, Card, SubmitButton } from '../../common';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { userContext } from '../../../contexts/CurrentUser';
import Popup from 'reactjs-popup';
import { createNewPost } from '../../../API/wall/methods';

import styles from './NewPost.module.css';
import AddImage from './AddImage';

const NewPost = () => {
  const { user } = useContext(userContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  const [postText, setPostText] = useState('');
  const [image, setImage] = useState<null | File>(null);

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
        setWidth(cardRef.current.clientWidth + 1);
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
            <p className={styles.input}>O czym myślisz?</p>
          </div>
        </Card.Card>
      </div>
    );
  });

  PopupTriggerCard.displayName = 'NewPostInactive';

  const contentStyle = {
    zIndex: 6,
  };
  const overlayStyle = {
    zIndex: 5,
    background: 'rgba(255, 255, 255, 0.2)',
    filter: 'blur(6px)',
  };

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
        {(close: () => void, isOpen: boolean) => {
          useEffect(() => {
            if (!isOpen) return;
            const rootDiv = document.getElementById('root');
            if (!rootDiv) return;
            rootDiv.style.filter = 'blur(6px)';

            return () => {
              if (!isOpen) return;
              const rootDiv = document.getElementById('root');
              if (!rootDiv) return;
              rootDiv.style.filter = 'none';
            };
          }, [isOpen]);
          const sendNewPost = async () => {
            try {
              setButtonDisabled(true);
              await createNewPost(postText, image);
              close();
            } catch (error) {
              setError(true);
            }
          };
          return (
            <div style={{ width: width }}>
              <Card.Card ref={modalRef}>
                <div className={styles.modal}>
                  <Icon url={user.profilePhoto} className={styles.icon} />
                  <AddImage
                    image={image}
                    addImage={(e) =>
                      setImage(e?.target?.files && e.target.files[0])
                    }
                    className={styles.addImage}
                  />
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
                  {image && (
                    <img
                      className={styles.photo}
                      src={URL.createObjectURL(image)}
                      alt="uploaded photo"
                    />
                  )}
                  <SubmitButton
                    text={error ? 'Wystapił błąd' : 'Opublikuj'}
                    className={styles.submitButton}
                    progress={error ? 'error' : 'success'}
                    onClick={sendNewPost}
                    disabled={!error && buttonDisabled}
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
