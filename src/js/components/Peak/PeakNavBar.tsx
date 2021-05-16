import cx from 'classnames';

import styles from './PeakNavBar.module.css';
import React from 'react';
import { peakInformations } from '../../views/Peak/PeakDetails';

export type PeakNavbarProps = {
  state: peakInformations;
  setState: (choice: peakInformations) => void;
};

const PeakNavBar = ({ state, setState }: PeakNavbarProps) => {
  return (
    <div className={styles.navigation}>
      <div
        className={cx(styles.icon, {
          [styles.selected]: state === 'description',
        })}
        onClick={() => setState('description')}
      >
        Description
      </div>

      <div
        className={cx(styles.icon, {
          [styles.selected]: state === 'map',
        })}
        onClick={() => setState('map')}
      >
        Map
      </div>

      <div
        className={cx(styles.icon, {
          [styles.selected]: state == 'posts',
        })}
        onClick={() => setState('posts')}
      >
        Posts
      </div>
    </div>
  );
};

export default PeakNavBar;
