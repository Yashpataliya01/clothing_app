import { lazy } from "react";
import { About } from "../pages/Public/About/About";

// import styles
import "../styles/global.css";
// lazy import components
const Public = lazy(() => import("../layouts/Public"));
const Home = lazy(() => import("../pages/Public/Home/Home"));
const Contact = lazy(() => import("../pages/Public/Contact/Contact"));
const Catalogs = lazy(() => import("../pages/Public/Catalogs/Catalogs"));
const Blogs = lazy(() => import("../pages/Public/Blogs/Blogs"));

const BlogDetails = lazy(() =>
  import("../pages/Public/Blogs/components/BlogDetails/BlogDetails")
);
const Product = lazy(() => import("../pages/Public/Product/Product"));
const School = lazy(() => import("../pages/Public/Product/components/School"));
const Corporate = lazy(() =>
  import("../pages/Public/Product/components/Corporate")
);
const Hospital = lazy(() =>
  import("../pages/Public/Product/components/Hospital")
);
const Institutional = lazy(() =>
  import("../pages/Public/Product/components/Institutional")
);
export const publicRoutes = [
  {
    path: "/",
    element: <Public />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "catalogs",
        element: <Catalogs />,
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: ":id", // 👈 dynamic route for each blog post
            element: <BlogDetails />,
          },
        ],
      },
      {
        path: "product",
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            path: "school",
            element: <School />,
          },
          {
            path: "corporate",
            element: <Corporate />,
          },
          {
            path: "hospital",
            element: <Hospital />,
          },
          {
            path: "institutional",
            element: <Institutional />,
          },
        ],
      },
    ],
  },
];
