import Dashboard from "./containers/Dashboard/Dashboard";
import Pokemon from "./components/Pokemon";

const routes = [
  { path: "/pokemon/:name", component: Pokemon },
  { path: "/", component: Dashboard },
];

export default routes;
