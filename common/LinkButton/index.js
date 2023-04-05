import React from "react";

import styles from './styles.module.scss';
import { Button } from "@mui/material";

function LinkButton({label, attributes}) {
  return (
    <div className={styles.linkbutton}>
      <Button disableElevation variant="contained" {...attributes}>{label}</Button>
    </div>
  );
}

export default LinkButton;
