import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const LoggedInWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LoggedInWrapper;
