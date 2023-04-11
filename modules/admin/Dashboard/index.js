import React from "react";
import WithAuth from "@root/common/WithAuth";
import Layout from "@root/common/Layout/Admin";

import styles from "./styles.module.scss";
import Illustration from "@root/common/Illustration";

function Dashboard() {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <Illustration 
          size={400} 
          title="Dashboard coming soon"
          message="Exciting new widgets are under development and soon show on dashboard. Hand tight!"
          path="/images/dashboard.svg" 
        />
      </div>
    </Layout>
  );
}

export default WithAuth(Dashboard);
