import Dashboard from "./containers/Dashboard/Dashboard";
import Profile from "./containers/Profile/Profile";

const routes = [
  { path: "/pokemon/:name", component: Profile },
  { path: "/", component: Dashboard },
];

export default routes;
