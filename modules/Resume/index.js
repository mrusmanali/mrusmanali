import clsx from "clsx";
import React from "react";
import { Container, Grid } from "@mui/material";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Progress from "./components/Progress";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

import styles from './styles.module.scss';
import Download from "./components/Download";

function Resume() {
  return (
    <Container>
      <div className={styles.resume}>
        <div id="printable">
          <Grid container spacing={4}>
            <Grid item lg={9} md={8} sm={12}>
              <div className={clsx(styles.resume_content, 'br_pt50')}>
                <div className="br_mb50"><Header /></div>
                <div className="br_mb50"><Profile /></div>
                <div className="br_mb50"><Experience /></div>
                <div className="br_mb50"><Education /></div>
              </div>
            </Grid>
            <Grid item lg={3} md={4} sm={12}>
              <div className={clsx(styles.resume_sidebar, 'br_pt50', styles.active)}>
                <div className="br_mb50"><BasicInfo /></div>
                <div className="br_mb50"><Progress /></div>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.download}><Download /></div> */}
      </div>
    </Container>
  );
}

export default Resume;
