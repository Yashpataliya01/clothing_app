import React from "react";
import { lazy, Suspense, useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Footer from "../components/Navigations/Footer/Footer";

// import Components
const Navbar = lazy(() => import("../components/Navigations/Navbar/Navbar"));

const Public = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div className="page_wrapper">
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  );
};

export default Public;
