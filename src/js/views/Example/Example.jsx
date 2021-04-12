import React from 'react';
import styles from './Example.module.css';
import Counter from '../../components/Counter/Counter';
import axios from 'axios';
import authHeader from '../../API/auth/methods';

const Example = (mockProp) => {
  const getUsers = async () => {
    axios.get(`${process.env.REACT_APP_API_URL}api/public/users`, { headers: authHeader() }).then(
      (response) => {
        console.log(response);
        return response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className={styles.exampleWrapper}>
      <div className={styles.header}>Example</div>
      <button onClick={getUsers}>Example fetch</button>
      <Counter initialCount={10} />
    </div>
  );
};

export default Example;
