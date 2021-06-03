import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import cx from 'classnames';

import styles from './AddImage.module.css';

export type AddImageProps = {
  addImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image?: File | null;
  className?: string;
};

const AddImage = ({ className, addImage, image }: AddImageProps) => {
  return (
    <div
      className={cx(styles.addImage, className, {
        [styles.withImage]: image,
      })}
    >
      <label htmlFor="single">
        <BiImageAdd />
      </label>
      <input type="file" id="single" onChange={addImage} />
    </div>
  );
};

export default AddImage;
