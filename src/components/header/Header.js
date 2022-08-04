import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  // console.log(splitLocation);

  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">PRODUCT ADMIN</Link>
      </h1>
      <nav>
        <ul>
          <li
            className={
              splitLocation[1] === "dashboard" ? `${styles.active}` : ""
            }
          >
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i>
              <br />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === "products" ? `${styles.active}` : ""
            }
          >
            <Link to="/products">
              <i className="fa fa-shopping-cart"></i>
              <br />
              <span>Products</span>
            </Link>
          </li>
          <li
            className={splitLocation[1] === "account" ? `${styles.active}` : ""}
          >
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
