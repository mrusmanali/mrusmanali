import React, { useEffect } from "react";

import styles from './styles.module.scss';
import Wrapper from "@root/common/Wrapper";
import ArticleForm from "./components/ArticleForm";
import WithAuth from "@root/common/WithAuth";

function Admin() {


  return (
    <Wrapper>
      <div className={styles.admin}>
        dknfkdnfkd
        {/* <ArticleForm /> */}
      </div>
    </Wrapper>
  );
}

export default WithAuth(Admin);
