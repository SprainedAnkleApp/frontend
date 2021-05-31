import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PeakMap from '../../components/Peak/PeakMap';
import styles from './PeakDetails.module.css';
import { getPeak, getPeakPostsPaginated } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';
import { Peak as PeakType } from '../../models/interfaces';
import { Peak } from '../../components/PeaksList';
import PeakNavBar from '../../components/Peak/PeakNavBar';

import cx from 'classnames';
import { Posts } from '../../components/common/Post';

export type peakInformations = 'description' | 'map' | 'posts';

export type PeakDetailsProps = {
  className: string;
};

const PeakDetails = ({ className }: PeakDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const [peakDetails, setPeakDetails] = useState<PeakType | undefined>(
    undefined
  );
  const [state, setState] = useState<peakInformations>('description');
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const fetchPeak = async () => {
      setPeakDetails(await getPeak(id));
    };
    fetchPeak();
  }, []);

  if (!peakDetails) return null;

  return (
    <div className={cx(styles.container, className)} id="postsScroll">
      <Peak
        peak={peakDetails}
        redirectTo={'/peaks'}
        className={styles.card}
        setShowForm={() => setShowForm(!showForm)}
        peakDetails={true}
      />
      <PeakNavBar state={state} setState={setState} />
      <div
        className={state !== 'posts' ? styles.peakInformation : styles.posts}
      >
        {state === 'description' && (
          <PeakDescription
            peak={peakDetails}
            showForm={showForm}
            key={peakDetails.name}
          />
        )}
        {state === 'map' && (
          <PeakMap center={[peakDetails.latitude, peakDetails.longitude]} />
        )}
        {state === 'posts' && (
          <Posts postsFetcher={getPeakPostsPaginated(id, 10)} />
        )}
      </div>
    </div>
  );
};

export default PeakDetails;
