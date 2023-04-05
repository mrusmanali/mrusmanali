import React from "react";

import styles from './styles.module.scss';
import LogoLink from "../LogoLink";
import Navigation from "../Navigation";
import { AppBar, Container, Stack } from "@mui/material";

function Header() {
  return (
    <AppBar>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <LogoLink />
          <Navigation />
        </Stack>
      </Container>
    </AppBar>
  );
}

export default Header;
