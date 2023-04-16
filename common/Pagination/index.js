import React from "react";
import { TablePagination } from "@mui/material";

import styles from "./styles.module.scss";

function Pagination({page = 0, perpage = 5, count = 0, onChangeRows, onChangePage}) {
  return (
    <TablePagination
      page={page}
      count={count}
      component="div"
      rowsPerPage={perpage}
      onPageChange={onChangePage}
      className={styles.pagination}
      onRowsPerPageChange={onChangeRows}
      rowsPerPageOptions={[5, 10, 20, 30]}
    />
  );
}

export default Pagination;
