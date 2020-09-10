import Dashboard from "./components/Dashboard";
import Pokemon from "./components/Pokemon";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/pokemon/:id", component: Pokemon },
];

export default routes;
