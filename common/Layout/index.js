import React from "react";

import styles from './styles.module.scss';
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "@mui/material";

function Layout({children}) {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
