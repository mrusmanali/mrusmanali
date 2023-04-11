import React from "react";

import styles from "./styles.module.scss";
import Layout from "@root/common/Layout/Admin";

function ArticleList() {
  return (
    <Layout>
      <div className={styles.articlelist}>ArticleList</div>
    </Layout>
  );
}

export default ArticleList;
