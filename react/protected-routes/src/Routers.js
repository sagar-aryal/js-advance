import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import { About, Contact, Home, Login, Products, Register } from "./pages/index";

// create protected routes component to route all protected routes
const ProtectedRoutes = () => {
  const user = useAuth();

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

const Routers = () => {
  return (
    <Routes>
      {/*    public routes   */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/*      protected routes   */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Routers;
