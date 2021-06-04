import React from 'react';
import { FaMountain } from 'react-icons/fa';

import styles from './AddPeak.module.css';
import cx from 'classnames';

export type AddPeakProps = {
  showPeak: boolean;
  setShowPeak: (show: boolean) => void;
  className?: string;
};

const AddPeak = ({ className, showPeak, setShowPeak }: AddPeakProps) => {
  return (
    <div
      className={cx(styles.addPeak, className, {
        [styles.withPeak]: showPeak,
      })}
      onClick={() => setShowPeak(!showPeak)}
    >
      <FaMountain className={styles.peakIcon} />
    </div>
  );
};

export default AddPeak;
