import React from "react";

import styles from "./styles.module.scss";
import Link from "next/link";

function IntroBlock() {
  return (
    <div className={styles.intro}>
      <div className={styles.intro_thumb}>
        <img src="https://firebasestorage.googleapis.com/v0/b/mrusmanali1234.appspot.com/o/profile.jpg?alt=media&token=c86600d8-aa7c-4262-bf83-f543fdfe0ef1" />
      </div>
      <h3 className={styles.intro_heading}>About me</h3>
      <p className={styles.intro_message}>
        Experienced front-end developer with expertise in UI design,
        architecture, web apps, and mobile apps. Delivers high-quality work in
        fast-paced environments. Strong interpersonal skills.{" "}
        <Link href="resume" className={styles.intro_link}>
          More about me ↬
        </Link>
      </p>
    </div>
  );
}

export default IntroBlock;
