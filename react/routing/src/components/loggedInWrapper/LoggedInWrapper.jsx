import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const LoggedInWrapper = () => {
  const isAuthenticated = true;
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </div>
  );
};

export default LoggedInWrapper;
