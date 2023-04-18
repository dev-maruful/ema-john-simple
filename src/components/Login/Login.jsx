import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Login Here</h3>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
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
