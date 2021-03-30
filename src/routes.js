import React from "react";

const HomePage = React.lazy(() => import("pages/HomePage"));
const DetailMovie = React.lazy(() => import("pages/DetailMovie"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));

const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: `/detail-movie/:id`,
    exact: false,
    component: DetailMovie,
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
