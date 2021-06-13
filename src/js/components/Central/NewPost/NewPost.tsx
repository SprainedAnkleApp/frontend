import { Icon, Card, SubmitButton, SelectWithLabel } from '../../common';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { userContext } from '../../../contexts/CurrentUser';
import Popup from 'reactjs-popup';
import { createNewPostWithPhotoAndPeak } from '../../../API/wall/methods';

import styles from './NewPost.module.css';
import AddImage from './AddImage';
import useBlur from '../../../hooks/useBlur';
import AddMap from './AddMap';
import { Point } from 'pigeon-maps';
import DraggableMap from './DraggableMap';
import { getPeaksNames } from '../../../API/peaks/methods';
import { Peak } from '../../../models/interfaces';
import AddPeak from './AddPeak';
import { Option } from '../../common/SelectWithLabel';

const NewPost = ({
  setNewPostAdded,
}: {
  setNewPostAdded: (state: number) => void;
}) => {
  const { user } = useContext(userContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  const [postText, setPostText] = useState('');
  const [image, setImage] = useState<null | File>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<Point>([49.13905, 20.220381]);
  const [showPeak, setShowPeak] = useState<boolean>(false);

  const [error, setError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [peakId, setPeakId] = useState<string | null>(null);
  const [peaks, setPeaks] = useState<Peak[]>([]);

  useEffect(() => {
    if (cardRef.current) {
      setOffset(cardRef.current.clientHeight);
      setWidth(cardRef.current.clientWidth);
    }
    const fetchPeaks = async () => {
      const peaksData = await getPeaksNames();
      setPeaks(peaksData);
      const peaksOptions: Option[] = peaksData.map((peak: Peak) => {
        return { value: peak.id, label: peak.name };
      });
      setOptions(peaksOptions);
    };
    fetchPeaks();
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
        nested
      >
        {(close: () => void, isOpen: boolean) => {
          useBlur(isOpen);
          const sendNewPost = async () => {
            try {
              setButtonDisabled(true);
              const peak = showPeak ? peakId : null;

              await createNewPostWithPhotoAndPeak(
                postText,
                image,
                showMap ? anchor[0] : 0.0,
                showMap ? anchor[1] : 0.0,
                peak
              );

              close();
              clearInput();
              setNewPostAdded(Math.random());
            } catch (error) {
              setError(true);
            }
          };
          return (
            <div style={{ width: width + 80 }} className={styles.popupWindow}>
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
                  <AddPeak
                    showPeak={showPeak}
                    setShowPeak={setShowPeak}
                    className={styles.addPeak}
                  />
                  {showPeak && (
                    <div className={styles.dropdownContainer}>
                      <SelectWithLabel
                        type={'text'}
                        name={'peak'}
                        label={''}
                        placeholder={'Wspomnij o szczycie'}
                        options={options}
                        onChange={(e) => {
                          setPeakId(e.target.value);
                          const peak = peaks.find(
                            (peak: Peak) =>
                              parseInt(peak.id) === parseInt(e.target.value)
                          );
                          if (peak) setAnchor([peak.latitude, peak.longitude]);
                        }}
                      />
                    </div>
                  )}
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
