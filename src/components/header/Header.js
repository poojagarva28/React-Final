import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">PRODUCT ADMIN</Link>
      </h1>
      <nav>
        <ul>
          <li className={styles.active}>
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i>
              <br />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="fa fa-shopping-cart"></i>
              <br />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <i className="fa fa-user-o"></i>
              <br />
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logout}>
        {localStorage.getItem("loginStatus") === "true" && (
          <Link to="/">
            Admin, <b>Logout</b>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
