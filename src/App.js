import Header from './Header';
import Cards from './Cards.js';
import CardInfo from './CardInfo.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Cards {...props} />
          </Route>
          <Route exact path="/pokemon/:id">
            <CardInfo/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
