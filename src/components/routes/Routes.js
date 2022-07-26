import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../account/Account";
import Dashboard from "../dashboard/Dashboard";
import Login from "../login/Login";
import Products from "../products/Products";
const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/dashboard"
        element={
          localStorage.getItem("loginStatus") === "false" ? (
            <Login />
          ) : (
            <Dashboard />
          )
        }
      ></Route>
      <Route
        path="/products"
        element={
          localStorage.getItem("loginStatus") === "false" ? (
            <Login />
          ) : (
            <Products />
          )
        }
      ></Route>
      <Route
        path="/account"
        element={
          localStorage.getItem("loginStatus") === "false" ? (
            <Login />
          ) : (
            <Account />
          )
        }
      ></Route>
    </Routes>
  );
};

export default appRoutes;
