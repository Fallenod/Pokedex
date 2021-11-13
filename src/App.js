import Header from './components/Header/Header';
import Cards from './pages/Cards.js';
import CardInfo from './pages/CardInfo.js';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <Router basename="/Pokedex/" forceRefresh={true}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Cards /> 
          </Route>
          <Route path="/pokemon/:id">
            <CardInfo/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
