import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ReactPaginate from "react-paginate";

// import { pokemon } from "./store/store";
// import { setPokemon } from "./store/events";

import { Header } from "./components/Header";
import Dashboard from "./components/Dashboard";
import Pokemon from "./components/Pokemon";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:id" component={Pokemon} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

// pokemons.on(getPokemons, (state, payload) => [...state, payload]);
// paginator.on(getPokemons, (payload) => payload);
