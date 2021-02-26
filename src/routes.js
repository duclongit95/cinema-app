import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
];

const routesAdmin = [
  {
    path: "/dashboard",
    exact: false,
    component: Dashboard,
  },
];

export { routesHome, routesAdmin };
