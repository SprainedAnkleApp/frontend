import { Header } from '../../components/common/Header';

const Home = () => {
  const text = [...Array(70).keys()].map((number) => <p>number</p>);
  return (
    <div>
      <Header selected={'home'} />
      <div>{text}</div>
    </div>
  );
};

export default Home;
