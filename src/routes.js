import Dashboard from "./components/Dashboard";
import Pokemon from "./components/Pokemon";

const routes = [
  { path: "/pokemon/:id", component: Pokemon },
  { path: "/", component: Dashboard },
];

export default routes;
