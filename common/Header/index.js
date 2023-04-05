import React from "react";

import styles from './styles.module.scss';
import LogoLink from "../LogoLink";
import Navigation from "../Navigation";
import { AppBar, Container, Stack, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar color="inherit" position="relative" className={styles.appbar} elevation={0}>
      <Container className={styles.appbar_container}>
        <LogoLink />
        <Navigation />
      </Container>
    </AppBar>
  );
}

export default Header;
