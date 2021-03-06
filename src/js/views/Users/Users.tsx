import { SearchBar } from '../../components/LeftBar';
import { Card } from '../../components/common';
import React, { useState, useMemo, useCallback } from 'react';
import { SectionNavBar } from '../../components/common';

import styles from './Users.module.css';
import { UsersList } from '../../components/Users';
import { getSearchUsersPaginated } from '../../API/user/methods';
import { getPendingFriendsPaginated } from '../../API/friends/methods';

import cx from 'classnames';

export type UsersListOptions = 'all' | 'invitations';

export type UsersProps = {
  className?: string;
};

const Users = ({ className }: UsersProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedList, setSelectedList] = useState<UsersListOptions>('all');

  const states = useMemo(
    () => ({
      all: 'Wszyscy',
      invitations: 'Zaproszenia',
    }),
    []
  );

  const pendingFetcher = useCallback(() => getPendingFriendsPaginated(10), []);

  const fetcher = useCallback(() => {
    return selectedList == 'all'
      ? getSearchUsersPaginated(10, searchTerm)
      : pendingFetcher();
  }, [selectedList, searchTerm]);
  return (
    <div className={cx(styles.wrapper, className)}>
      <SectionNavBar
        state={selectedList}
        possibleStates={states}
        setState={(newState) => setSelectedList(newState)}
        className={styles.navBar}
      />
      {selectedList == 'all' && (
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          className={styles.searchBar}
        />
      )}
      <Card.Card className={styles.card}>
        <UsersList userFetcher={fetcher()} state={selectedList} />
      </Card.Card>
    </div>
  );
};

export default Users;
