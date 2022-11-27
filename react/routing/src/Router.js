import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import Todos from "./pages/Todos";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
]);
