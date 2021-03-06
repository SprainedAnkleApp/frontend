import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router';
import MapWithMarker from '../../components/common/MapWithMarker';
import { Peak } from '../../components/PeaksList';

import styles from './PeakDetails.module.css';
import { getPeak, getPeakPostsPaginated } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';
import { Peak as PeakType } from '../../models/interfaces';

import cx from 'classnames';
import { Posts } from '../../components/common/Post';
import { Card, SectionNavBar } from '../../components/common';

export type peakInformations = 'description' | 'map' | 'posts';

export type PeakDetailsProps = {
  className?: string;
  newPeakReached: number;
  setNewPeakReached: (state: number) => void;
};

const PeakDetails = ({
  className,
  newPeakReached,
  setNewPeakReached,
}: PeakDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const [peakDetails, setPeakDetails] = useState<PeakType | undefined>(
    undefined
  );
  const [state, setState] = useState<peakInformations>('description');
  const [showForm, setShowForm] = useState<boolean>(false);

  const possibleStates = useMemo(
    () => ({
      description: 'Opis',
      map: 'Mapa',
      posts: 'Posty',
    }),
    []
  );

  useEffect(() => {
    const fetchPeak = async () => {
      setPeakDetails(await getPeak(id));
    };
    fetchPeak();
  }, [newPeakReached]);

  if (!peakDetails) return null;

  return (
    <div className={cx(styles.container, className)} id="postsScroll">
      <Peak
        peak={peakDetails}
        redirectTo={'/peaks'}
        className={styles.card}
        setShowForm={() => setShowForm(!showForm)}
        setNewPeakReached={setNewPeakReached}
      />
      <SectionNavBar
        state={state}
        setState={setState}
        possibleStates={possibleStates}
      />
      <div
        className={state !== 'posts' ? styles.peakInformation : styles.posts}
      >
        {state === 'description' && (
          <PeakDescription
            peak={peakDetails}
            key={peakDetails.name}
            statistics={peakDetails.statistics}
          />
        )}
        {state === 'map' && (
          <Card.Card className={styles.cardMap}>
            <MapWithMarker
              center={[peakDetails.latitude, peakDetails.longitude]}
            />
          </Card.Card>
        )}
        {state === 'posts' && (
          <Posts
            postsFetcher={getPeakPostsPaginated(id, 10)}
            scrollId="postsScroll"
          />
        )}
      </div>
    </div>
  );
};

export default PeakDetails;
