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
          [styles.selected]: state === peakInformations.description,
        })}
        onClick={() => setState(peakInformations.description)}
      >
        Description
      </div>

      <div
        className={cx(styles.icon, {
          [styles.selected]: state === peakInformations.map,
        })}
        onClick={() => setState(peakInformations.map)}
      >
        Map
      </div>

      <div
        className={cx(styles.icon, {
          [styles.selected]: state == peakInformations.posts,
        })}
        onClick={() => setState(peakInformations.posts)}
      >
        Posts
      </div>
    </div>
  );
};

export default PeakNavBar;
