import React from 'react';
import { GoKebabVertical } from 'react-icons/go';

export type KebabMenuProps = {
  className?: string;
};

const KebabMenu = ({ className }: KebabMenuProps) => {
  return (
    <div className={className}>
      <GoKebabVertical />
    </div>
  );
};

export default KebabMenu;
