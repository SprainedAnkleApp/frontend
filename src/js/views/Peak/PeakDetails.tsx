import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Switch, Route } from 'react-router';
import styles from './PeakDetails.module.css';
import { getPeak } from '../../API/peaks/methods';
import PeakDescription from '../../components/Peak/PeakDescription';
import { Peak as PeakType } from '../../models/interfaces';
import { Peak } from '../../components/PeaksList';
import PeakNavBar from '../../components/Peak/PeakNavBar';

const PeakDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [peakDetails, setPeakDetails] = useState<PeakType | undefined>(
    undefined
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
      <PeakNavBar id={parseInt(id)} />
      <div className={styles.peakInformation}>
        <Switch>
          <Route path="/peaks/:id/map">
            <p>Map</p>
          </Route>
          <Route path="/peaks/:id/posts">
            <p>Posts</p>
          </Route>
          <Route path="/peaks/:id">
            <PeakDescription peak={peakDetails} key={peakDetails.name} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PeakDetails;
