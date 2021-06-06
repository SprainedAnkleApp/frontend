import React from 'react';
import { Map, Marker, Point, ZoomControl } from 'pigeon-maps';
import styles from './MapWithMarker.module.css';
import cx from 'classnames';

export type MapWithMarkerProps = {
  center: Point;
  defaultZoom?: number;
  mapHeight?: number;
  className?: string;
};

const MapWithMarker = ({
  center,
  defaultZoom = 11,
  mapHeight = 300,
  className,
}: MapWithMarkerProps) => {
  return (
    <div className={cx(styles.borderRadius, className)}>
      <Map height={mapHeight} defaultCenter={center} defaultZoom={defaultZoom}>
        <ZoomControl />
        <Marker width={50} anchor={center} color={'#78D17E'} />
      </Map>
    </div>
  );
};

export default MapWithMarker;
