import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Progress from "./components/Progress";

import styles from './styles.module.scss';

function Resume() {
  return (
    <Container>
      <div className={styles.resume}>
        <div className={styles.resume_content}>
          <div className={styles.resume_header}><Header /></div>
          <div className={styles.resume_block}><Profile /></div>
          <div className={styles.resume_block}><Experience /></div>
          <div className={styles.resume_block}><Education /></div>
        </div>
        <div className={styles.resume_sidebar}>
          <div className={styles.resume_block}><BasicInfo /></div>
          <div className={styles.resume_block}><Progress /></div>
        </div>
      </div>
    </Container>
  );
}

export default Resume;
