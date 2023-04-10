import React from "react";
import Header from "@root/common/Header";
import Footer from "@root/common/Footer";
import { Container } from "@mui/material";

import styles from './styles.module.scss';

function MainLayout({children}) {
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

export default MainLayout;
