import React, { useEffect, useState } from "react";
import styles from "./AccData.module.css";

const AccData = (props) => {
  let localData = JSON.parse(localStorage.getItem("accountsPage"));
  let selectedDatatoShow = localData[`${props.activeUser}`];
  return (
    <div className={styles.container}>
      <div className={styles.accountdatacontainer}>abc</div>
      <div className={styles.accountdatacontainer}>
        <div className={styles.right}>
          <h2>Account Settings</h2>

          <div className={styles.inputcontainer}>
            <div className={styles.inputfields}>
              <label>Account Name</label>
              <input
                type="text"
                value={
                  selectedDatatoShow !== undefined
                    ? selectedDatatoShow.name
                    : ""
                }
              />
              <label>Password</label>
              <input
                type="password"
                value={
                  selectedDatatoShow !== undefined
                    ? selectedDatatoShow.password
                    : ""
                }
              />
              <label>Phone</label>
              <input
                type="tel"
                value={
                  selectedDatatoShow !== undefined
                    ? selectedDatatoShow.phone
                    : ""
                }
              />
            </div>
            <div className={styles.inputfields}>
              <label>Account Email</label>
              <input
                type="email"
                value={
                  selectedDatatoShow !== undefined
                    ? selectedDatatoShow.email
                    : ""
                }
              />
              <label>Re-enter Password</label>
              <input
                type="password"
                value={
                  selectedDatatoShow !== undefined
                    ? selectedDatatoShow.password
                    : ""
                }
              />
              <button className="btn">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccData;
