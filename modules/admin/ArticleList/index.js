import clsx from "clsx";
import React from "react";
import Crumbs from "@root/common/Crumbs";
import Layout from "@root/common/Layout/Admin";
import { IconButton, Stack } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";

import styles from "./styles.module.scss";


function ArticleList() {

  return (
    <Layout>
      <div className={styles.articlelist}>
        <div className={clsx(styles.articlelist_topbar, 'us_mb25')}>
          <Stack direction="row" spacing={1} alignContent="center">
            <IconButton className={styles.articlelist_backlink}>
              <IconArrowLeft />
            </IconButton>
            <Crumbs 
              crumbs={[
                {link: '/dashboard', title: 'Dashboard'},
                {title: 'Articles'}
              ]}
            />
          </Stack>
        </div>
        <div className={styles.articlelist_body}>
          
        </div>
      </div>
    </Layout>
  );
}

export default ArticleList;
