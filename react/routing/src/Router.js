import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import LoggedInWrapper from "./components/loggedInWrapper/LoggedInWrapper";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Todos from "./pages/todos/Todos";
import Error from "./pages/error/Error";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <LoggedInWrapper />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
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
    ],
  },
]);
