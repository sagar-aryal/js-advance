import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Products = () => {
  const navigate = useNavigate();
  const user = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <h1>Products</h1>
      <p>Welcome to {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Products;
