import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <Image
        width={720}
        height={720}
        className={styles.header_image}
        src="https://firebasestorage.googleapis.com/v0/b/mrusmanali1234.appspot.com/o/profile.jpg?alt=media&token=c86600d8-aa7c-4262-bf83-f543fdfe0ef1"
      />
      <h1 className={styles.header_name}>Usman Ali Shauket</h1>
      <h2 className={styles.header_role}>Front-end Developer <p className={styles.header_tech}>React | React Native | Angular | NodeJS</p></h2>
      <h3 className={styles.header_location}>Dubai - United Arab Emirates</h3>

      <button className={styles.header_button}>My skills</button>
    </div>
  );
}

export default Header;
