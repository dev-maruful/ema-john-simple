import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Sign Up</Link>}
        {user && (
          <>
            <span className="color-white">Welcome {user.email}</span>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
