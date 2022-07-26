import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.logincontainer}>
      <div>
        <h2 className="text-center">Welcome to Dashboard, Login</h2>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <br />
        <Link to="/dashboard">
          <button type="submit" className="btn">
            Login
          </button>
        </Link>
        <br />
        <br />
        <button type="submit" className="btn">
          Forgot Your Password
        </button>
      </div>
    </div>
  );
};

export default Login;
