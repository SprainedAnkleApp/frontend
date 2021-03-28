import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Link to="/exampleRoute">example link</Link>
      <br />
      <Link to="/peaks">peaksList link</Link>
    </div>
  );
}

export default Main;
