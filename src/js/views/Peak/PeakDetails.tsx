import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PeakMap from '../../components/Peak/PeakMap';
import styles from './PeakDetails.module.css';
import { getPeak } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';
import { Peak as PeakType } from '../../models/interfaces';
import { Peak } from '../../components/PeaksList';
import PeakNavBar from '../../components/Peak/PeakNavBar';

export enum peakInformations {
  description,
  map,
  posts,
}

const PeakDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [peakDetails, setPeakDetails] = useState<PeakType | undefined>(
    undefined
  );
  const [state, setState] = useState<peakInformations>(
    peakInformations.description
  );

  useEffect(() => {
    const fetchPeak = async () => {
      const value = await getPeak(id);
      setPeakDetails(value);
    };
    fetchPeak();
  }, []);

  if (!peakDetails) return null;

  return (
    <div className={styles.container}>
      <Peak peak={peakDetails} redirectTo={'/peaks'} className={styles.card} />
      <PeakNavBar state={state} setState={setState} />
      <div className={styles.peakInformation}>
        {state === peakInformations.description && (
          <PeakDescription peak={peakDetails} key={peakDetails.name} />
        )}
        {state === peakInformations.map && (
          <PeakMap center={[peakDetails.latitude, peakDetails.longitude]} />
        )}
        {state === peakInformations.posts && <p>Posts</p>}
      </div>
    </div>
  );
};

export default PeakDetails;
