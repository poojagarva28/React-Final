import React, { useEffect, useState } from "react";
import axios from "axios";
import OrdersList from "./OrdersList";
import NotificationList from "./NotificationList";
import styles from "./Dashboard.module.css";
import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
import HorizontalChart from "./Charts/HorizontalChart";

const Dashboard = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
        );
        localStorage.setItem(
          "accountsPage",
          JSON.stringify(response.data.accountsPage)
        );
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(response.data.dasbhoardPage)
        );
        localStorage.setItem(
          "productsPage",
          JSON.stringify(response.data.productsPage)
        );
        localStorage.setItem("loginStatus", true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  let localPerformance = JSON.parse(localStorage.getItem("dashboardPage"))[
    "storage"
  ];
  const [userData, setUserData] = useState({
    labels: [
      `Available (${localPerformance.available}GB)`,
      `System (${localPerformance.system}GB)`,
      `Used (${localPerformance.used}GB)`,
    ],

    datasets: [
      {
        data: [
          localPerformance.available,
          localPerformance.system,
          localPerformance.used,
        ],

        backgroundColor: ["#f7604c", "#a8d582", "#4ed6b8"],
        fontColor: "#fff",
      },
    ],
  });
  return (
    <div>
      <div className={styles.flexdiv}>
        <div>
          <LineChart />
        </div>
        <div>
          <HorizontalChart />
        </div>
      </div>

      <div className={styles.flexdiv}>
        <div>
          <PieChart chartData={userData} />
        </div>
        <div>
          <NotificationList />
        </div>
      </div>
      <OrdersList />
    </div>
  );
};

export default Dashboard;
