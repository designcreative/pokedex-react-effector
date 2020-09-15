import React from "react";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";

const App = () => {
  // const [loading, setLoading] = useState(true);
  // const [pokemons, setPokemons] = useState([]);
  // const [errorMessages, setErrorMessages] = useState(null);
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
