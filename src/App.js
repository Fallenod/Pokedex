import Header from './Header';
import Cards from './Cards.js';
import CardInfo from './CardInfo.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loader from "./Loader"
import { Suspense } from "react";

const App = (props) => {
  return (
    <Router forceRefresh={true}>
        <Header />
        <Switch>
          <Route exact path="/Pokedex/">
            <Suspense fallback={<Loader/>}>
              <Cards {...props} /> 
            </Suspense>
          </Route>
          <Route exact path="/Pokedex/pokemon/:id">
            <CardInfo/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
