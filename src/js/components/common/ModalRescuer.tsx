import { Card, SubmitButton } from '.';
import React from 'react';
import Popup from 'reactjs-popup';
import { BiSad } from 'react-icons/bi';

import styles from './ModalRescuer.module.css';
import useBlur from '../../hooks/useBlur';

export type ModalRescuerProps = {
  isOpen: boolean;
  close: () => void;
};

const ModalRescuer = ({ isOpen, close }: ModalRescuerProps) => {
  useBlur(isOpen);
  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close} nested>
      <Card.Card>
        <div className={styles.text}>Wystąpił błąd</div>
        <BiSad className={styles.icon} />
        <SubmitButton
          className={styles.button}
          progress="success"
          text="Rozumiem"
          onClick={close}
        />
      </Card.Card>
    </Popup>
  );
};

export default ModalRescuer;
