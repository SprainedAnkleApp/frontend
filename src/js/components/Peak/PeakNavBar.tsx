import cx from 'classnames';

import styles from './PeakNavBar.module.css';
import React from 'react';
import { peakInformations } from '../../views/Peak/PeakDetails';

export type PeakNavbarProps = {
  state: peakInformations;
  onDescriptionChoice: () => void;
  onMapChoice: () => void;
  onPostsChoice: () => void;
};

const PeakNavBar = ({
  state,
  onDescriptionChoice,
  onMapChoice,
  onPostsChoice,
}: PeakNavbarProps) => {
  return (
    <div className={styles.navigation}>
      <div
        className={cx(styles.icon, {
          [styles.selected]: state === peakInformations.description,
        })}
        onClick={onDescriptionChoice}
      >
        Description
      </div>

      <div
        className={cx(styles.icon, {
          [styles.selected]: state === peakInformations.map,
        })}
        onClick={onMapChoice}
      >
        Map
      </div>

      <div
        className={cx(styles.icon, {
          [styles.selected]: state == peakInformations.posts,
        })}
        onClick={onPostsChoice}
      >
        Posts
      </div>
    </div>
  );
};

export default PeakNavBar;
