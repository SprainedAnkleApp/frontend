import ModalRescuer from '../components/common/ModalRescuer';
import { useState } from 'react';
import React from 'react';

const useModalRescuer = () => {
  const [error, setError] = useState(false);
  return {
    openModal: () => setError(true),
    rescuer: <ModalRescuer isOpen={error} close={() => setError(false)} />,
  };
};

export default useModalRescuer;
