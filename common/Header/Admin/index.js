import React from "react";
import UserOpts from "./components/UserOpts";

import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div>&nbsp;</div>
      <UserOpts />
    </div>
  );
}

export default Header;
