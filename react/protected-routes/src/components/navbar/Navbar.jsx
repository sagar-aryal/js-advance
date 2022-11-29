import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        E~Mart
      </Link>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeclassname="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <div>
        <Link to="/login" className="btn login-btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
