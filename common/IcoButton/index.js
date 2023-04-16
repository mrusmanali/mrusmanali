import React from "react";
import { isFunction } from "lodash";
import clsx from "clsx";
import { IconButton } from "@mui/material";

import styles from './styles.module.scss';

function IcoButton({children, color = 'primary', onClick}) {

  const onClickHandle = () => {
    isFunction(onClick) && onClick();
  }

  return (
    <IconButton 
      onClick={onClickHandle}
      className={clsx(styles.icobutton, color)}>
        {children}
    </IconButton>
  );
}

export default IcoButton;
