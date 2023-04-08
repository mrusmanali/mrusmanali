import React, { useState } from "react";
import Wrapper from "@root/common/Wrapper";
import LogoLink from "@root/common//LogoLink";
import { IconMenu2 } from "@tabler/icons-react";
import Navigation from "@root/common//Navigation";
import ContactLink from "@root/common/ContactLink";
import { AppBar, Drawer, Hidden, IconButton } from "@mui/material";

import styles from "./styles.module.scss";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <AppBar
      color="inherit"
      position="relative"
      className={styles.appbar}
      elevation={0}
    >
      <Wrapper>
        <div className={styles.appbar_container}>
          <div className={styles.appbar_menutoggle}>
            <IconButton onClick={toggleDrawer} >
              <IconMenu2 size={25} stroke={2.5} />
            </IconButton>
          </div>

          <LogoLink />

          <Hidden smDown>
            <Navigation />
          </Hidden>

          <div className={styles.appbar_contactlink}>
            <ContactLink />
          </div>
        </div>
      </Wrapper>
      <Drawer open={open} className={styles.drawer} onClose={toggleDrawer}>
        <Navigation variant="vertical" />
      </Drawer>
    </AppBar>
  );
}

export default Header;
