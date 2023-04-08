import React, { useEffect } from "react";

import styles from './styles.module.scss';
import Wrapper from "../Wrapper";

function Footer() {

  const fullyear = () => {
    var dt = new Date();
    return dt.getFullYear()
  }

  return (
    <div className={styles.footer}>Copyright © {fullyear()} Usman Ali.</div>
  );
}

export default Footer;
