import React, { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  useEffect(() => {
    console.log("useeffect");
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json "
        );
        console.log(response.data.accountsPage);
        console.log(response.data.dasbhoardPage);
        console.log(response.data.productsPage);
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
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
