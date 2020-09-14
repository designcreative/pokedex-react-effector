import * as React from "react";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
// import ReactPaginate from "react-paginate";

// import { setPokemon } from "./store/events";

import { Header } from "./components/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route path={route.path} component={route.component} key={idx} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default withRouter(App);

// pokemons.on(getPokemons, (state, payload) => [...state, payload]);
// paginator.on(getPokemons, (payload) => payload);
