import React from "react";

import styles from './styles.module.scss';

function Illustration({path, title, message, size = 20}) {
  return (
    <div className={styles.illustration}>
      <img className={styles.illustration_image} width={size} height={size} src={path}/>
      {title && <h4 className={styles.illustration_title}>{title}</h4>}
      {message && <p className={styles.illustration_message}>{message}</p>}
    </div>
  );
}

export default Illustration;
