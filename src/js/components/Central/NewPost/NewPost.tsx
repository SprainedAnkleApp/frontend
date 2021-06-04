import { Icon, Card, SubmitButton } from '../../common';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { userContext } from '../../../contexts/CurrentUser';
import Popup from 'reactjs-popup';
import { createNewPost } from '../../../API/wall/methods';

import styles from './NewPost.module.css';
import AddImage from './AddImage';
import useBlur from '../../../hooks/useBlur';
import AddMap from './AddMap';
import { Point } from 'pigeon-maps';
import DraggableMap from './DraggableMap';

const NewPost = () => {
  const { user } = useContext(userContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  const [postText, setPostText] = useState('');
  const [image, setImage] = useState<null | File>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<Point>([49.13905, 20.220381]);

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
  };

  const clearInput = () => {
    setPostText('');
    setImage(null);
    setShowMap(false);
    setButtonDisabled(false);
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
        modal
        nested
      >
        {(close: () => void, isOpen: boolean) => {
          useBlur(isOpen);
          const sendNewPost = async () => {
            try {
              setButtonDisabled(true);
              showMap
                ? await createNewPost(postText, image, anchor[0], anchor[1])
                : await createNewPost(postText, image, 0.0, 0.0);
              close();
              clearInput();
            } catch (error) {
              setError(true);
            }
          };
          return (
            <div style={{ width: width }} className={styles.popupWindow}>
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
                  <AddMap
                    showMap={showMap}
                    setShowMap={setShowMap}
                    className={styles.addMap}
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
                  {showMap && (
                    <div className={styles.map}>
                      <DraggableMap anchor={anchor} setAnchor={setAnchor} />
                      <span className={styles.mapInstruction}>
                        Aby wybrać miejsce na mapie, przeciągnij pinezkę.
                      </span>
                    </div>
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
