import clsx from "clsx";
import React, { useState } from "react";
import Sidebar from "@root/common/Sidebar";
import Header from "@root/common/Header/Admin";
import { AppBar, Box, Drawer } from "@mui/material";

import styles from './styles.module.scss';

function Layout({children}) {
  const [open, setOpen] = useState(true);

  const onClickToggle = () => {
    setOpen(!open);
  }

  return (
    <div className={styles.layout}>
      <AppBar
        elevation={0} 
        color='inherit' 
        position="fixed" 
        className={clsx(styles.layout_appbar, !open && styles.collapsed)}>
        <Header />
      </AppBar>

      <Drawer 
        anchor="left" 
        variant="permanent" 
        className={clsx(styles.layout_drawer, !open && styles.collapsed)}>
        <Sidebar collapsed={!open} />
      </Drawer>

      {/* TODO: Later work on sidebar toggle */}
      {/* <div className={clsx(styles.layout_toggle, !open && styles.collapsed)}>
        <Toggle collapsed={open} onClick={onClickToggle} />
      </div> */}

      <Box className={clsx(styles.layout_content, !open && styles.collapsed)}>{children}</Box>
    </div>
  );
}

export default Layout;
