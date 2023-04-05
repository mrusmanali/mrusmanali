import React from "react";

import styles from './styles.module.scss';
import LinkButton from "../LinkButton";
import { Stack } from "@mui/material";

function Navigation() {
  return (
    <Stack direction="row" alignItems="center" spacing={1} className={styles.navigation}>
      <ul className={styles.navigation_list}>
        <li className={styles.navigation_item}><a className={styles.navigation_link}>Home</a></li>
        <li className={styles.navigation_item}><a className={styles.navigation_link}>Resume</a></li>
      </ul>
      <LinkButton label="Contact me" attributes={{size:'small'}} />
    </Stack>
  );
}

export default Navigation;
