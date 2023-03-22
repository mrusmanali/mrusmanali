import React from "react";

import styles from './styles.module.scss';

function BasicInfo() {
  return (
    <div className={styles.address}>
      <h3 className={styles.address_heading}>Details</h3>
      <p className={styles.address_dob}>04/05/1989</p>
      <p className={styles.address_content}>Apt 805, Hassani 23, Nad Al Hamar</p>
      <span className={styles.address_phone}>+971 55 8863814</span>
      <span className={styles.address_email}>mrusmanali95@gmail.com</span>
    </div>
  );
}

export default BasicInfo;
