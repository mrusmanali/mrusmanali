import React from "react";
import Header from "@root/common/Header";
import Footer from "@root/common/Footer";
import Wrapper from "@root/common/Wrapper";

import styles from './styles.module.scss';

function Layout({children}) {
  return (
    <div>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Layout;
