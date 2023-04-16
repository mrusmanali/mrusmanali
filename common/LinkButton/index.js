import React from "react";
import { Button } from "@mui/material";

import styles from './styles.module.scss';

function LinkButton({label, icon, attributes}) {
  return (
    <div className={styles.linkbutton}>
      <Button 
        startIcon={icon} 
        disableElevation 
        variant="contained" {...attributes}>
          {label}
      </Button>
    </div>
  );
}

export default LinkButton;
