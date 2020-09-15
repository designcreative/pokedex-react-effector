import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

const routes = [
  { path: "/pokemon/:id", component: Profile },
  { path: "/", component: Dashboard },
];

export default routes;
