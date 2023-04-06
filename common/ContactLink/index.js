import React from "react";
import { Button, Hidden, IconButton } from "@mui/material";
import { IconAt } from "@tabler/icons-react";

import styles from './styles.module.scss';

function ContactLink() {
  return (
    <div className={styles.contact}>
      <Hidden smDown>
        <Button
          disableElevation
          variant="contained"
          startIcon={<IconAt size={20} />}
        >
          Contact me
        </Button>
      </Hidden>
      <Hidden smUp>
        <IconButton>
          <IconAt size={20} />
        </IconButton>
      </Hidden>
    </div>
  );
}

export default ContactLink;
