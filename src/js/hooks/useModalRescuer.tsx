import ModalRescuer from '../components/common/ModalRescuer';
import { useState } from 'react';
import React from 'react';

const useModalRescuer = () => {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  return {
    openModal: (text = 'Wystąpił błąd') => {
      setError(true);
      setErrorText(text);
    },
    rescuer: (
      <ModalRescuer
        isOpen={error}
        text={errorText}
        close={() => setError(false)}
      />
    ),
  };
};

export default useModalRescuer;
