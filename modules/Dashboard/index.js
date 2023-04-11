import React from "react";
import WithAuth from "@root/common/WithAuth";
import Layout from "@root/common/Layout/Admin";

import styles from "./styles.module.scss";

function Dashboard() {
  return (
    <Layout>
      <div className={styles.dashboard}>Dashboard</div>
    </Layout>
  );
}

export default WithAuth(Dashboard);
