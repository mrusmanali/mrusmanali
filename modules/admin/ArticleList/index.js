import clsx from "clsx";
import React from "react";
import Crumbs from "@root/common/Crumbs";
import Layout from "@root/common/Layout/Admin";
import { IconButton, Stack } from "@mui/material";
import { IconArrowLeft, IconEye, IconPlus, IconTrash } from "@tabler/icons-react";

import styles from "./styles.module.scss";
import { map } from "lodash";
import IcoButton from "@root/common/IcoButton";
import Pagination from "@root/common/Pagination";
import LinkButton from "@root/common/LinkButton";
import ListSearch from "@root/common/ListSearch";


function ArticleList() {

  const list = [{
    key: 1,
    firstname: 'Usman',
    lastname: 'Ali Shauket',
    email: 'mrusmanali95@gmail.com'
  },{
    key: 1,
    firstname: 'Imtiaz',
    lastname: 'Ali Shauket',
    email: 'imtiazalishauket@gmail.com'
  },{
    key: 1,
    firstname: 'Abdul',
    lastname: 'Raffey',
    email: 'abdulraffey@gmail.com'
  }]

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
                    <td>Firstname</td>
                    <td>Lastname</td>
                    <td>Email</td>
                    <td align="center" width={120}>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {map(list, (item, index) => {
                    return (
                      <tr key={item?.key}>
                        <td align="center">{index+1}</td>
                        <td>{item?.firstname}</td>
                        <td>{item?.lastname}</td>
                        <td>{item?.email}</td>
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
