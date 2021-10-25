import Header from './Header';
import Cards from './Cards.js';

const App = (props) => {
  return (
    <div>
     <Header />
     <Cards {...props} />
    </div>
  );
}

export default App;
