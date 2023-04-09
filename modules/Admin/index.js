import React from "react";

import styles from './styles.module.scss';
import Wrapper from "@root/common/Wrapper";
import ArticleForm from "./components/ArticleForm";

function Admin() {
  return (
    <Wrapper>
      <div className={styles.admin}>
        <ArticleForm />
      </div>
    </Wrapper>
  );
}

export default Admin;
