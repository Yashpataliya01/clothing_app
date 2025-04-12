import { lazy } from "react";
import { About } from "../pages/Public/About/About";

// import styles
import "../styles/global.css";

// lazy import components
const Public = lazy(() => import("../layouts/Public"));
const Home = lazy(() => import("../pages/Public/Home/Home"));
const Contact = lazy(() => import("../pages/Public/Contact/Contact"));

export const publicRoutes = [
  {
    path: "/",
    element: <Public />, // ✅ Correct JSX usage
    children: [
      {
        index: true,
        element: <Home />, // ✅ Also correct
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
