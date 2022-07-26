import React from "react";
import styles from "./AccData.module.css";

const AccData = (props) => {
  let localData = JSON.parse(localStorage.getItem("accountsPage"));
  let selectedDatatoShow = localData[`${props.activeUser}`];
  return (
    <div className={styles.container}>
      <div className={styles.accountdatacontainer}>
        <div className={styles.imgcontainer}>
          <img
            src={
              selectedDatatoShow !== undefined
                ? selectedDatatoShow.profilePic
                : ""
            }
            alt={
              selectedDatatoShow !== undefined ? selectedDatatoShow.name : ""
            }
          />
          <div className={styles.imgoverlay}>
            <i className="fa fa-trash-o"></i>
          </div>
        </div>
      </div>
      <div className={styles.accountdatacontainer}>
        <div className={styles.right}>
          <h2>Account Settings</h2>
          <form>
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
                <div className={styles.btn}>
                  <button className="btn">Update Profile</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccData;