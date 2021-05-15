import React from 'react';
import { Map, Marker, Point, ZoomControl } from 'pigeon-maps';

export type PeakMapProps = {
  center: Point;
  defaultZoom?: number;
  mapHeight?: number;
};

const PeakMap = ({
  center,
  defaultZoom = 11,
  mapHeight = 300,
}: PeakMapProps) => {
  return (
    <Map height={mapHeight} defaultCenter={center} defaultZoom={defaultZoom}>
      <ZoomControl />
      <Marker width={50} anchor={center} color={'#78D17E'} />
    </Map>
  );
};

export default PeakMap;
