import clsx from "clsx";
import React from "react";
import Crumbs from "@root/common/Crumbs";
import Layout from "@root/common/Layout/Admin";

import styles from './styles.module.scss';

function CategoriesItem() {

  const onBackHandle = () => {}

  return (
    <Layout>
      <div className={styles.catitem}>
        <div className={clsx(styles.catitem_crumbs, "us_mb40")}>
          <Crumbs
            onBack={onBackHandle}
            crumbs={[
              { title: "Dashboard", link: "/admin/dashboard" },
              { title: "Categories", link: "/admin/categories" },
              { title: "Category" },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}

export default CategoriesItem;
