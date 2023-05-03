import clsx from "clsx";
import React from "react";
import { Stack } from "@mui/material";
import Crumbs from "@root/common/Crumbs";
import { useRouter } from "next/router";
import Layout from "@root/common/Layout/Admin";
import IcoButton from "@root/common/IcoButton";
import ListSearch from "@root/common/ListSearch";
import LinkButton from "@root/common/LinkButton";
import { IconEye, IconPlus, IconTrash } from "@tabler/icons-react";

import styles from "./styles.module.scss";

function CategoriesList() {
  const router = useRouter();

  const onClickNew = () => {
    console.log('sjbsjdbsjdb');
    router.push(`/admin/categories/new`);
  };

  const onSearchHandle = () => {};

  return (
    <Layout>
      <div className={styles.articlelist}>
        <div className={clsx(styles.articlelist_crumbs, "us_mb25")}>
          <Crumbs
            crumbs={[
              { link: "/dashboard", title: "Dashboard" },
              { title: "Categories" },
            ]}
          />
        </div>

        <div className={styles.articlelist_body}>
          <div className={styles.datagrid}>
            <div className={styles.datagrid_head}>
              <h4 className={styles.datagrid_heading}>Configurations</h4>
              <Stack direction="row" spacing={1}>
                <div className={styles.datagrid_search}>
                  <ListSearch onSearch={onSearchHandle} />
                </div>
                <div className={styles.datagrid_action}>
                  <LinkButton
                    onClick={onClickNew}
                    icon={<IconPlus />}
                    label="ADD NEW"
                  />
                </div>
              </Stack>
            </div>
            <div className={styles.datagrid_body}>
              <table cellPadding="0" cellSpacing="0" className={styles.datagrid_table}>
                <thead>
                  <tr>
                    <td align="center" width={50}>No</td>
                    <td>Title</td>
                    <td>Category</td>
                    <td>Author</td>
                    <td align="center" width={120}>Actions</td>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td align="center">1</td>
                    <td>jdknfkdnfkdnf</td>
                    <td>Productivity</td>
                    <td>Usman</td>
                    <td align="center">
                      <Stack direction="row" spacing={1}>
                        <IcoButton color="neutral"><IconEye /></IcoButton>
                        <IcoButton><IconTrash /></IcoButton>
                      </Stack>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CategoriesList;
