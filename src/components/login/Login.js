import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const errMsg = <p className={styles.err}>Enter Valid Username / Password</p>;

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("loginStatus", true);
  });

  const loginHandler = () => {
    if (username === password && username !== "" && password !== "") {
      setShow(false);
      setLogin(true);
      localStorage.setItem("loginStatus", true);
      navigate("/dashboard");
    } else {
      setShow(true);
    }
  };

  return (
    <div className={styles.logincontainer}>
      <div>
        <h2 className="text-center">Welcome to Dashboard, Login</h2>
        <label>Username</label>
        <input type="text" onChange={usernameHandler} value={username} />
        <label>Password</label>
        <input type="password" onChange={passwordHandler} value={password} />
        {show && errMsg}
        <button type="submit" className="btn" onClick={loginHandler}>
          Login
        </button>

        <br />
        {/* <br />
        <button type="submit" className="btn">
          Forgot Your Password
        </button> */}
      </div>
    </div>
  );
};

export default Login;
