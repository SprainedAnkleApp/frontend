import React from 'react';
import { ImLocation } from 'react-icons/im';
import styles from './AddMap.module.css';
import cx from 'classnames';

export type AddMapProps = {
  showMap: boolean;
  setShowMap: (show: boolean) => void;
  className?: string;
};

const AddMap = ({ className, showMap, setShowMap }: AddMapProps) => {
  return (
    <div
      className={cx(styles.addMap, className, {
        [styles.withMap]: showMap,
      })}
      onClick={() => setShowMap(!showMap)}
    >
      <ImLocation className={styles.mapIcon} />
    </div>
  );
};

export default AddMap;
