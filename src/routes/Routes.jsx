// react library imports
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// import local components
import { publicRoutes } from "./PublicRoutes";

export const routes = createBrowserRouter(publicRoutes);
