import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters or more");
      return;
    } else if (password !== confirm) {
      setError("Password didn't match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h3 className="form-title">SignUp Here</h3>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <input className="submit-btn" type="submit" value="Sign Up" />
      </form>
      <p className="small">
        <small>
          Already have an account?{" "}
          <Link to="/login">
            <span>Login here!</span>
          </Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
