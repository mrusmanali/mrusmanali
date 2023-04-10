import React from "react";

import styles from "./styles.module.scss";
import WithAuth from "@root/common/WithAuth";

function Dashboard() {
  return (
    <div className={syles.dashboard}>Dashboard</div>
  );
}

export default WithAuth(Dashboard);
