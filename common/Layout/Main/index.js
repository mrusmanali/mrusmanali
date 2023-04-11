import React from "react";
import Header from "@root/common/Header/Main";
import Footer from "@root/common/Footer";
import { Container } from "@mui/material";

import styles from './styles.module.scss';

function Layout({children}) {
  return (
    <div className={styles.mainlayout}>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
