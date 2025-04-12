// react library imports
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

// import routes
import { routes } from "./routes/Routes.jsx";

function App() {
  
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
