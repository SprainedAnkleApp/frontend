import { Header } from '../../components/common/Header';
import styles from './Home.module.css';

const Home = () => {
  const text = [...Array(70).keys()].map((number) => <p>number</p>);
  return (
    <div>
      <Header selected={'home'} />
      <div className={styles.home}></div>
      <div>{text}</div>
    </div>
  );
};

export default Home;
