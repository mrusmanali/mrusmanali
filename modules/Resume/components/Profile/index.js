import React from "react";

import styles from "./styles.module.scss";

function Profile() {
  return (
    <div className={styles.profile}>
      <h3 className={styles.profile_heading}>Profile</h3>
      <div className={styles.profile_content}>
        <p className={styles.profile_text}>
          I am an accomplished front-end developer with expertise that spans the
          full spectrum of web development. I hold a degree in computer
          engineering and have accumulated over a decade of experience in this
          field.
        </p>
        <p className={styles.profile_text}>
          I have honed my skills in a wide range of areas, including responsive
          UI design, project architecture, web apps, and reactive programming.
          These competencies have allowed me to work on a diverse array of
          projects, ranging from small-scale initiatives to large, complex
          endeavors.
        </p>
        <p className={styles.profile_text}>
          I am no stranger to operating in fast-paced environments, and I have a
          proven track record of delivering high-quality work on time. My
          experience working in large teams has also enabled me to navigate
          complex interpersonal dynamics and communicate effectively with
          stakeholders at all levels.
        </p>
      </div>
    </div>
  );
}

export default Profile;
