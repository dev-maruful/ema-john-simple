import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Login Here</h3>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="submit-btn" type="submit" value="Login" />
      </form>
      <p className="small">
        <small>
          New to Ema-john?{" "}
          <Link to="/signup">
            <span>Create new account</span>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
