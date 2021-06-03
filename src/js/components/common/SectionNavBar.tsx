import cx from 'classnames';
import React from 'react';

import styles from './SectionNavBar.module.css';

export type SectionNavBarProps<T extends string> = {
  state: T;
  setState: (choice: T) => void;
  possibleStates: { [key in T]: string };
  className?: string;
  iconClass?: string;
};

const SectionNavBar = <T extends string>({
  state,
  possibleStates,
  setState,
  className,
  iconClass,
}: SectionNavBarProps<T>) => {
  return (
    <div className={cx(styles.navigation, className)}>
      {Object.entries(possibleStates).map(([entry, entryName], index) => (
        <div
          key={`entry_${index}`}
          className={cx(
            styles.icon,
            {
              [styles.selected]: entry === state,
            },
            iconClass
          )}
          onClick={() => setState(entry as T)}
        >
          {entryName as string}
        </div>
      ))}
    </div>
  );
};

export default SectionNavBar;
