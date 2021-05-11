import styles from './PeakDescription.module.css';
import { FaMapSigns } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineArrowUp } from 'react-icons/ai';
import React from 'react';
import { Peak } from '../../models/interfaces';

export type PeakDescriptionProps = {
  peak: Peak;
};

const PeakDescription = ({ peak }: PeakDescriptionProps) => {
  return (
    <div className={styles.peakDescription}>
      <p>
        <AiOutlineArrowUp /> Wysokość: {peak.height} m n.p.m.
      </p>
      <p>
        <MdMyLocation /> Województwo: {peak.region}
      </p>
      <p>
        <FaMapSigns /> Pasmo górskie: {peak.mountainRange}
      </p>
      <p className={styles.about}>{peak.about}</p>
    </div>
  );
};

export default PeakDescription;
