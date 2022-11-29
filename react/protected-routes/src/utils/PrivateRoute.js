import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoutes = () => {
  const auth = AuthContext();
  const { username, password } = auth;
  const match = username === "admin" && password === "admin";

  return match ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
