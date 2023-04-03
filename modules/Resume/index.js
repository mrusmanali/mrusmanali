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

function Resume() {
  return (
    <div className={clsx(styles.resume)}>
      <Container>
        <Grid container spacing={4}>
          <Grid className={styles.content} item lg={9} md={8} xs={12}>
            <div className={clsx(styles.resume_main)}>
              <div className="br_mb50"><Header /></div>
              <div className="br_mb50"><Profile /></div>
              <div className="br_mb50"><Experience /></div>
              <div className="br_mb50"><Education /></div>
            </div>
          </Grid>
          <Grid className={styles.side} item lg={3} md={4} xs={12}>
            <div className={clsx(styles.resume_side)}>
              <div className="br_mb50"><BasicInfo /></div>
              <div className="br_mb50"><Progress /></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Resume;
