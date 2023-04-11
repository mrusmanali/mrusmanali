import React from "react";

import styles from './styles.module.scss';
import LogoLink from "../LogoLink";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_logo}><LogoLink /></div>
    </div>
  );
}

export default Sidebar;
