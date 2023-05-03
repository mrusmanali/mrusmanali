import clsx from "clsx";
import { map } from "lodash";
import { Stack } from "@mui/material";
import Crumbs from "@root/common/Crumbs";
import IcoButton from "@root/common/IcoButton";
import Layout from "@root/common/Layout/Admin";
import Pagination from "@root/common/Pagination";
import LinkButton from "@root/common/LinkButton";
import ListSearch from "@root/common/ListSearch";
import React, { useEffect, useState } from "react";
import ArticlesService from "@root/services/articles";
import { IconArrowLeft, IconEye, IconPlus, IconTrash } from "@tabler/icons-react";

import styles from "./styles.module.scss";

function ArticleList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    ArticlesService.find({})
    .then(setListData)
    .catch(error=>console.log(error))
  }, []);

  return (
    <Layout>
      <div className={styles.articlelist}>
        <div className={clsx(styles.articlelist_topbar, 'us_mb25')}>
          <Stack direction="row" spacing={1} alignContent="center">
            <IcoButton>
              <IconArrowLeft />
            </IcoButton>
            {/* <IconButton className={styles.articlelist_backlink}>
              
            </IconButton> */}
            <Crumbs 
              crumbs={[
                {link: '/dashboard', title: 'Dashboard'},
                {title: 'Articles'}
              ]}
            />
          </Stack>
        </div>
        <div className={styles.articlelist_body}>
          <div className={styles.datagrid}>
            <div className={styles.datagrid_head}>

              <h4 className={styles.datagrid_heading}>Configurations</h4>
              <Stack direction="row" spacing={1}>
                <div className={styles.datagrid_search}>
                  <ListSearch onSearch={()=>{}} />
                </div>
                <div className={styles.datagrid_action}>
                  <LinkButton onClick={()=>{}} icon={<IconPlus />} label="ADD NEW" />
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
                  {map(listData, (item, index) => {
                    return (
                      <tr key={item?.id}>
                        <td align="center">{index+1}</td>
                        <td>{item?.title}</td>
                        <td>Productivity</td>
                        <td>Usman</td>
                        <td align="center">
                          <Stack direction="row" spacing={1}>
                            <IcoButton color="neutral">
                              <IconEye />
                            </IcoButton>
                            <IcoButton>
                              <IconTrash />
                            </IcoButton>
                          </Stack>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className={styles.datagrid_footer}>
              <div>&nbsp;</div>
              <div className={styles.datagrid_pagination}>
                <Pagination 
                  count={12}
                  onChangePage={()=>{}}
                  page={1}
                  onChangeRows={()=>{}}
                  perpage={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ArticleList;
