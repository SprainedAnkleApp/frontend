import { Point, Map, Draggable, Marker, ZoomControl } from 'pigeon-maps';
import React from 'react';

export type DraggableMapProps = {
  anchor: Point;
  setAnchor: (point: Point) => void;
};
const DraggableMap = ({ anchor, setAnchor }: DraggableMapProps) => {
  return (
    <Map height={300} center={anchor} defaultZoom={11}>
      <ZoomControl />
      <Draggable anchor={anchor} onDragEnd={setAnchor}>
        <Marker width={50} color={'#78D17E'} />
      </Draggable>
    </Map>
  );
};

export default DraggableMap;
