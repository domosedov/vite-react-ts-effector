import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes } from "../pages";

export const Application: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <React.Suspense fallback="loading..">
          <Routes />
        </React.Suspense>
      </Router>
    </React.StrictMode>
  );
};
