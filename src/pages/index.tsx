import * as React from "react";
import type { PartialRouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import Home from "./home";

const About = React.lazy(() => import("../pages/about"));

export const routes: PartialRouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const Routes = () => useRoutes(routes);
